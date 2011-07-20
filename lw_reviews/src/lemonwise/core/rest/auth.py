from tastypie.authentication import Authentication
from tastypie.authorization import Authorization
from models import *
import socket

"""class for authenticating via merchant domain in the request."""
class DomainAuthentication(Authentication):

    def is_authenticated(self, request, **kwargs):
        ip = request.META['HTTP_X_FORWARDED_FOR']
        domain_name = socket.gethostbyaddress(ip)[0]
        try:
            merchant = Merchant.objects.get(domain=domain_name)
        except DoesNotExist:
            return False

        return True

    def get_identifier(self, request):
        #may want to change how we implement this?!
        
        return request.META['HTTP_X_FORWARDED_FOR']

"""class for authorizing data access via merchant's api token."""
class TokenAuthorization(Authorization):

    """checks if api key matches merchant.  Assumes api key is sent as the user
        name in the http request."""
    def is_authorized(self, request, object=None):
        ip = request.META['HTTP_X_FORWARDED_FOR']
        domain_name = socket.gethostbyaddress(ip)[0]
        merchant = Merchant.objects.get(domain=domain_name)
        api_key = request.user.username
        if merchant.token == api_key:
            return True
        else:
            return False
        
    def apply_limits(self, request, object_list):
        #hold off on this for now; maybe we'll need it later for writes?

        pass
