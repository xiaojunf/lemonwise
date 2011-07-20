from django import template

register = template.Library()

@register.filter
def out_of_100(percent):
    return str(int(100 * float(percent)))

@register.filter
def anonymoize(name):
    try:
        first, last = name.split()
    except:
        return name
    return "%s %s." % (first, last[0])

@register.filter
def rating(rwidget, product):
    return str(rwidget.get_rating(product))

@register.filter
def small_thumb(thumb):
    if int(thumb.value) > 0:
        direction = '<span class="thumbs up small disabled">'
    else:
        direction = '<span class="thumbs down small disabled">'
    return ''.join([direction, '</span>', thumb.widget.title])

@register.filter
def large_thumb(review):
    if review.would_recommend:
        direction = '<div class="thumbs up large disabled"></div>'
    else:
        direction = '<div class="thumbs down large disabled"></div>'
    return direction

GOOD = 90
@register.filter
def aggregate_thumb(rating):
    if int(rating) > GOOD:
        score = 'over-90'
    else:
        score = 'under-90'
    return '<div class="sub-attribute %s">%s</div>' % (score, str(rating))

