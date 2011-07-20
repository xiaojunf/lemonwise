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

TEMPLATETAGS_DIR = 'lemonwise/templatetags/reviews/'
CUTOFF = 1

register = template.Library()

def group_items(items, group_size):
    '''Group widgets into groups of size group_size.'''
    return [items[index : index + group_size]
            for index in range(0, len(items), group_size)]   

THUMBS_PER_LINE = 3
@tag(register,[Variable(),Variable()])
def display_write_widgets(context, widget_type, widgets):
    #widget_type is rendered as 'slider widgets'
    widget_name = widget_type.split()[0] + 's'
    if widget_name == 'thumbss':
        widgets = group_items(widgets, THUMBS_PER_LINE)

    template = 'lemonwise/templatetags/write/widgets/%s.html' % widget_name
    new_context = RequestContext(context['request'], {
         widget_name: widgets,
        'product': context['product']
         })
       
    return render_to_string(template, new_context)

