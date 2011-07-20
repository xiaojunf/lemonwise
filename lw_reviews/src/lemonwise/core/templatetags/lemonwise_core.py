from django import template
from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.template import RequestContext
from django.template.loader import render_to_string
from django.template.loaders.app_directories import Loader

from templatetag_sugar.parser import Variable
from templatetag_sugar.register import tag

from lemonwise.merchant.models import Product
from lemonwise.reviews.models import Review

register = template.Library()

TEMPLATETAGS_DIR = 'lemonwise/templatetags/core/'
CUTOFF = 1

@register.filter
def content_type_id(value):
    if isinstance(value, models.Model):
        return ContentType.objects.get_for_model(value).pk

    return ''


@tag(register, [Variable()])
def ssi_loader(context, filepath):
    try:
        loader = Loader()
        source, origin = loader.load_template_source(filepath)
        return source

    except Exception as e:
        return ''

@tag(register, [])
def lemonwise(context):
    request = context['request']
    merchant_domain = 'http://%s/' % context['merchant']
    try:
        sku = request.GET.get('sku')
        product = Product.objects.get(sku=request.GET.get('sku'),
                                      category__merchant__domain=merchant_domain)
    except:
        product = Product.objects.filter(category__merchant__domain=merchant_domain)[0]
    reviews = Review.objects.filter(product=product)
    total_count = reviews.count()

    if total_count == 0:
        return 'No reviews yet.'

    positive = product.get_most_helpful(True)
    negative = product.get_most_helpful(False)
    helpful = filter(None, [positive, negative])

    start = int(request.GET.get('offset', 1)) - 1 #Changing to 1-based indexing
    show = int(request.GET.get('limit', 10))
    end = min([start + show, total_count])

    context = RequestContext(request, {
        'product': product,
        'reviews': reviews,
        'helpful': helpful,
        'start': start,
        'end': end,
        'total_count': total_count,
        'css': context['css'],
        'resources' : context['resources'],
        'sku': request.GET.get('sku')
        })

    return render_to_string(TEMPLATETAGS_DIR + 'lemonwise.html', context)


@tag(register, [Variable()])
def display_glance(context, product):
    if context['reviews'].count() < CUTOFF:
        return ''
    new_context = {'product': product}
    return render_to_string(TEMPLATETAGS_DIR + 'glance.html', new_context)

ORDER = {
        "select list widget": 1,
        "slider widget": 2,
        "thumbs widget": 3
        }
@tag(register, [Variable()])
def display_write_review(context, product):
    def sortfunc(x, y):
        return cmp(ORDER[x], ORDER[y])
    widgets = sorted(product.group_widgets().items(), sortfunc, key=lambda keypair: keypair[0])
    new_context = RequestContext(context['request'], {
        'product': product,
        'widgets': widgets
        })
    return render_to_string(TEMPLATETAGS_DIR + 'write.html', new_context)

@tag(register, [Variable()])
def display_helpful(context, helpful):
    if context['reviews'].count() < CUTOFF:
        return '<h2 style="display:none">not enough reviews, %s</h2>' % CUTOFF
    elif len(helpful) < 2:
        return '<h2 style="display:none">not enough helpful, %s</h2>' % len(helpful)
    new_context = {'reviews': helpful}
    return render_to_string(TEMPLATETAGS_DIR + 'helpful.html', new_context)

@tag(register, [Variable(), Variable(), Variable(), Variable()])
def display_reviews(context, reviews, product, start, end):
    new_context = RequestContext(context['request'], {
        'reviews': reviews.order_by('-date_created')[start:end],
        'product': product,
        'start': start,
        'end':  end,
        'total_count': context['total_count']
    })
    return render_to_string(TEMPLATETAGS_DIR + 'reviews.html', new_context)


