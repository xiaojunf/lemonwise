from tastypie.fields import *
from tastypie.resources import ALL, ModelResource

from lemonwise.core.api import LWResource, parse_ratings
from lemonwise.merchant.models import *
from lemonwise.widget.models import *

'''The helper methods here are kind of a hack. I can't figure out the "right"
way to do this in any of the documentation, so at least for now they are the
best solution.'''

def parse_widget(widget, product=None):
    '''Parse all info about a widget.'''
    widget_info = {
        'title': widget.title,
        'description': widget.description
        }
    if product and isinstance(widget, RatingWidget):
        widget_info['rating'] = widget.get_rating(product)
    if isinstance(widget, ThumbsWidget):
        widget_info['up_label'] = widget.up_label
        widget_info['down_label'] = widget.down_label
    if isinstance(widget, SliderWidget):
        widget_info['min_value'] = widget.min_value
        widget_info['max_value'] = widget.max_value
        widget_info['min_label'] = widget.min_label
        widget_info['max_label'] = widget.max_label
        steps = []
        for step in widget.steps.all():
            steps.append({
                'label': step.label,
                'value': step.value
                })
        widget_info['steps'] = steps
    if isinstance(widget, SelectListWidget):
        widget_info['allows_multiple'] = widget.allows_multiple
        items = []
        for item in widget.items.all():
            items.append({
                'title': item.title,
                'description': item.description,
                'value': item.value
                })
        widget_info['items'] = items
    return widget_info

class MerchantResource(LWResource):
    categories = ToManyField('lemonwise.merchant.api.CategoryResource', 'categories')

    class Meta(LWResource.Meta):
        queryset = Merchant.objects.all()
        allowed_methods = ('get',)
        excludes = ['date_created', 'date_updated', 'token']
        filtering = {'name': ('exact', 'startswith', 'contains',)}

class CategoryResource(LWResource):
    parent = ToOneField('self', 'parent', full=True, null=True)
    widgets = DictField()

    def dehydrate_widgets(self, bundle):
        return map(parse_widget, bundle.obj.get_widgets())
    
    class Meta(LWResource.Meta):
        queryset = Category.objects.all()
        allowed_methods = ('get',)
        filtering = {'identifier': ('exact', 'startswith', 'contains',)}

class ProductResource(LWResource):
    #category = ToOneField('lemonwise.reviews.api.CategoryResource', 'category', full=True)
    most_helpful = DictField(readonly=True)
    rating = FloatField(readonly=True)
    rating_widgets = ListField(readonly=True)
    reviews = ToManyField('lemonwise.reviews.api.ReviewResource', 'reviews',
                          full=True)
    widgets = ListField(readonly=True)

    class Meta(LWResource.Meta):
        queryset = Product.objects.all()
        filtering = {
            "name": ('exact', 'startswith', 'contains'),
            "identifier": ('exact', 'startswith',),
            "merchant": ('exact', 'startswith', 'contains'),
            "tags": ('exact',),
        }

    def dehydrate_widgets(self, bundle):
        return map(parse_widget, bundle.obj.get_widgets())

    def dehydrate_rating(self, bundle):
        return bundle.obj.get_rating()

    def dehydrate_rating_widgets(self, bundle):
        return parse_ratings(bundle.obj.get_widget_ratings())

    def parse_most_helpful(self, review):
        '''Parse a review to contain only most-helpful resources.'''
        if review is None:
            return None
        product = review.product
        widgets = review.get_rating_widgets()
        review_info = {
            'title': review.title,
            'message': review.message,
            'rating_widgets': parse_ratings(review.get_widget_ratings())
            }
        return review_info

    def dehydrate_most_helpful(self, bundle):
        positive = bundle.obj.get_most_helpful(positive=True)
        negative = bundle.obj.get_most_helpful(positive=False)
        most_helpful = {
            'positive': self.parse_most_helpful(positive),
            'negative': self.parse_most_helpful(negative)
            }
        return most_helpful

