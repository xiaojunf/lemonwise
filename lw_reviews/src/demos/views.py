import re

from django.shortcuts import render_to_response, get_object_or_404
from django.template.context import RequestContext

def demo(request):
    path = request.path
    merchant = re.search(r'^/demo/(.*)/', path).groups(1)[0]
    #{{STATIC_URL}} gets prepended to css later.
    css = 'demo/%s/%s.css' % (merchant, merchant)
    resources = 'demo/%s/%s-cached' % (merchant, merchant)
    
    template = 'lemonwise/demo/%s/%s.html' % (merchant, merchant)
    context = RequestContext(request, {
        'css': css,
        'merchant': merchant,
        'resources': resources
        })
    return render_to_response(template, context)
