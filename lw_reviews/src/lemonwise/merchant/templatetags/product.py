from django import template
from django.template.loader import render_to_string
from django.template import RequestContext

from templatetag_sugar.register import tag
from templatetag_sugar.parser import Variable

register = template.Library()

@tag(register, [Variable(), Variable()])
def display_aggregate_widgets(context, widget_type, widgets):
    widget_name = widget_type.split()[0] + 's'
    if widget_name == "selects":
        return ''
    product = context['product']
    rated_widgets = [widget for widget in widgets if widget.get_rating(product)]

    template = 'lemonwise/templatetags/aggregate/widgets/%s.html' % widget_name
    new_context = {
        widget_name: rated_widgets,
        'product': product
    }
    return render_to_string(template, new_context)
