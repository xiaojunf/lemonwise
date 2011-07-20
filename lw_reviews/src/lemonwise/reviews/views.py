from django.shortcuts import render_to_response
from django.template.context import RequestContext

def design_static(request):
    context = RequestContext(request)
    return render_to_response('lemonwise/design/reviews-static.html', context)

def reviews(request):
    merchant = request.GET.get('merchant')
    context = RequestContext(request, {
        'css': '',
        'merchant': merchant,
        'resources': ''
        })
    return render_to_response('lemonwise/design/reviews.html', context)


