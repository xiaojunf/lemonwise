from django import template
from django.contrib.comments.models import Comment
from django.contrib.contenttypes.models import ContentType
from django.shortcuts import get_object_or_404
from django.template.loader import render_to_string
from django.template import RequestContext
from lemonwise.merchant.models import Product
from lemonwise.reviews.models import ReviewWidget, Review, HelpfulVote
from templatetag_sugar.register import tag
from templatetag_sugar.parser import Variable, Optional, Constant, Name

register = template.Library()

@register.filter
def sentiment(review):
    if review.would_recommend:
        return 'Positive'
    else:
        return 'Negative'

@tag(register, [Variable()])
def display_review(context, review):
    new_context = RequestContext(context['request'], {
        'review': review,
        'comments': review.comments.all().order_by('-submit_date')})

    return render_to_string('lemonwise/templatetags/reviews/review.html', new_context)


@tag(register, [Variable(), Variable()])
def display_rating_widgets(context, widget_type, widgets):
    if widget_type.find('select') != -1:
        return ''
    widget_name = widget_type.split()[0] + 's' 
    template = 'lemonwise/templatetags/reviews/review/widgets/%s.html' % widget_name
    return render_to_string(template, {widget_name: widgets})

@tag(register, [Variable()])
def display_children(context, comment):
    children = Comment.objects.for_model(comment).order_by('-submit_date')

    template = 'lemonwise/templatetags/reviews/review/comment_children.html'
    new_context = {
        'children': children
    }
    return render_to_string(template, new_context)

