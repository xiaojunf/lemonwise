from django.contrib.contenttypes import generic
from django.contrib.contenttypes.models import ContentType
from django.db import models
from django_extensions.db import fields
from lemonwise.core.models import AuditModel
from taggit.managers import TaggableManager


class Merchant(AuditModel):
    name = models.CharField(max_length=100)
    domain = models.URLField(unique=True)
    token = fields.UUIDField()

    def __unicode__(self):
        return self.name


class Category(AuditModel):
    name = models.CharField(max_length=75)
    merchant = models.ForeignKey(Merchant, related_name='categories')
    parent = models.ForeignKey('self', null=True, blank=True,
        related_name='subcategories')

    def get_widgets(self):
        '''Get all the category's widgets.'''
 	return map(lambda widget: widget.widget, self.widgets.all())

    class Meta:
        verbose_name_plural = 'categories'

    def __unicode__(self):
        return self.name


class CategoryWidget(AuditModel):
    category = models.ForeignKey(Category, related_name='widgets')
    widget_type = models.ForeignKey(ContentType)
    widget_id = models.IntegerField()
    widget = generic.GenericForeignKey(ct_field='widget_type',
        fk_field='widget_id')

    def __unicode__(self):
        return '%s: %s' % (self.category, self.widget,)


class Product(AuditModel):
    name = models.CharField(max_length=255)
    sku = models.CharField(max_length=255)
    category = models.ForeignKey(Category, related_name='products')

    tags = TaggableManager(blank=True)

    def get_most_helpful(self, positive):
        '''Get the most helpful positive or negative review.'''
        return HelpfulVote.objects.most_helpful_review(self, positive)

    def get_widgets(self):
        '''Get all the product's widgets.'''
        widgets = []
        category = self.category
        while category:
            widgets.extend(category.get_widgets())
            category = category.parent
        return widgets

    def get_rating_widgets(self):
        '''Get the widgets that can be rated.'''
        return [widget for widget in self.get_widgets()
                if hasattr(widget, 'get_rating')]

    def get_widget_rating(self, widget):
        '''Get the rating of a widget.'''
        return widget.get_rating(self)

    def get_widget_ratings(self):
        '''Get the rating of each ratable widget.'''
        rating_map = {}
        rating_widgets = self.get_rating_widgets()
        ratings = map(self.get_widget_rating, rating_widgets)
        rating_map.update(zip(rating_widgets, ratings))
        return rating_map

    def group_widgets(self):
        '''Group the widgets by type.'''
        widgets = {}
        def make_dict(widget):
            try:
                widgets[widget.get_type()].append(widget)
            except:
                widgets[widget.get_type()] = [widget]
        map(make_dict, self.get_widgets())
        return widgets

    def get_rating(self):
        '''Get the product's rating. Returns -1 if no ratings are availabl.e'''
        try:
            return float(self.reviews.filter(would_recommend=True).count()) / self.reviews.count()
        except:
            return -1

    def __unicode__(self):
        return self.name

from lemonwise.reviews.models import HelpfulVote
