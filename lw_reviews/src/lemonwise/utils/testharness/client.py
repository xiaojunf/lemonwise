from functools import wraps

from django.core.handlers.wsgi import WSGIRequest
from django.core.signals import got_request_exception
from django.template import TemplateDoesNotExist
from django.utils.functional import curry
from django.test import signals
from django.test.client import Client, store_rendered_templates
from django.db import transaction, close_connection
from django.core.handlers.base import BaseHandler


def new_init(f):
    """
    We need to add a handler for returning the request instead of the response
    and initialize a variable that will tell us whether a particular
    get/post/put/delete is supposed to return the HttpResponse or the
    WSGIRequest
    """
    @wraps(f)
    def wrapper(self, **defaults):
        # It's an unbound function at this point, so we hook it with what we
        # get off the wrapper
        f(self, **defaults)
        self._return_request_instead = False
        self.handler_request = ClientHandler()
    return wrapper


def switch_client_request_instead(self):
    """
    Allows us to throw an internal switch in the Client to return the next
    request as WSGIRequest instead of the HttpResponse
    """
    self._return_request_instead = True
    return self


def new_request(f):
    """
    Handles actually creating a WSGIRequest instead of an HttpResponse if we
    are switched into that mode.  Will call the original request instead if
    needed.
    """
    def wrapper(self, **request):
        if not self._return_request_instead:
            # We are not supposed to return the request object itself, but do
            # the normal Django test client request
            return self.original_request(**request)

        # So we are switched into a mode where we need to return the request
        # instead of the response, we need to set the test client back to
        # response-returning normality so the next call to this client doesn't
        # continue to return WSGIRequest objects
        self._return_request_instead = False

        # Rip-off of the Django test client, but changed to return a fake WSGIRequest object
        environ = {
            'HTTP_COOKIE':       self.cookies.output(header='', sep='; '),
            'PATH_INFO':         '/',
            'QUERY_STRING':      '',
            'REMOTE_ADDR':       '127.0.0.1',
            'REQUEST_METHOD':    'GET',
            'SCRIPT_NAME':       '',
            'SERVER_NAME':       'testserver',
            'SERVER_PORT':       '80',
            'SERVER_PROTOCOL':   'HTTP/1.1',
            'wsgi.version':      (1,0),
            'wsgi.url_scheme':   'http',
            'wsgi.errors':       self.errors,
            'wsgi.multiprocess': True,
            'wsgi.multithread':  False,
            'wsgi.run_once':     False,
        }
        environ.update(self.defaults)
        environ.update(request)

        # Curry a data dictionary into an instance of the template renderer
        # callback function.
        data = {}
        on_template_render = curry(store_rendered_templates, data)
        signals.template_rendered.connect(on_template_render)

        # Capture exceptions created by the handler.
        got_request_exception.connect(self.store_exc_info)

        try:
            request = self.handler_request(environ)
        except TemplateDoesNotExist, e:
            # If the view raises an exception, Django will attempt to show
            # the 500.html template. If that template is not available,
            # we should ignore the error in favor of re-raising the
            # underlying exception that caused the 500 error. Any other
            # template found to be missing during view error handling
            # should be reported as-is.
            if e.args != ('500.html',):
                raise

        return request
    return wrapper


class ClientHandler(BaseHandler):
    """
    A HTTP Handler that can be used for testing purposes.
    Uses the WSGI interface to compose requests, but returns
    the raw HttpResponse object
    """
    def __call__(self, environ):
        from django.conf import settings
        from django.core import signals

        # Set up middleware if needed. We couldn't do this earlier, because
        # settings weren't available.
        if self._request_middleware is None:
            self.load_middleware()

        signals.request_started.send(sender=self.__class__)
        try:
            request = WSGIRequest(environ)
            response = self.get_response(request)

            # Apply response middleware.
            for middleware_method in self._response_middleware:
                response = middleware_method(request, response)
            response = self.apply_response_fixes(request, response)
        finally:
            signals.request_finished.disconnect(close_connection)
            signals.request_finished.send(sender=self.__class__)
            signals.request_finished.connect(close_connection)

        return request

# Time to do some monkey-patching.
#
# This allows us to do this with the client object
#
#   >>> client.get('/')
#   <HttpResponse >
#   >>> client.request_from.get('/')
#   <WSGIRequest >
#
setattr(Client, 'request_from', property(switch_client_request_instead))
setattr(Client, '__init__', new_init(Client.__init__))
setattr(Client, 'original_request', Client.request)
setattr(Client, 'request', new_request(Client.request))
