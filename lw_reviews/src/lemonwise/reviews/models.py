from django.contrib.auth.models import User
from django.contrib.comments.models import Comment
from django.contrib.contenttypes import generic
from django.contrib.contenttypes.models import ContentType
from django.db import models
from lemonwise.core.models import AuditModel
from lemonwise.merchant.models import Product
from lemonwise.reviews.managers import HelpfulVoteManager, ReviewWidgetManager


class Review(AuditModel):
    product = models.ForeignKey(Product, related_name='reviews')
    would_recommend = models.BooleanField()
    title = models.CharField(max_length=50)
    message = models.TextField(null=True, blank=True)
    name = models.CharField(max_length=75)
    location = models.CharField(max_length=75, null=True, blank=True)
    comments = generic.GenericRelation(Comment, object_id_field='object_pk')

    def get_helpfulness(self):
        '''Get the helpfulness of this review.'''
        helpful_votes = HelpfulVote.objects.filter(review=self)

        if helpful_votes:
            raw = float(sum([vote.is_helpful for vote in helpful_votes]))
            return raw / len(helpful_votes)
        else:
            return -1

    def get_widgets(self):
        '''Get all the widgets.'''
        return [rwidget.widget for rwidget in self.widgets.all()]
    
    def get_rwidgets(self):
        '''Get all the review widgets.'''
        return self.widgets.all()

    def get_rating_widgets(self):
        '''Get the widgets that can be rated.'''
        return [widget for widget in self.get_widgets()
                if hasattr(widget, 'get_rating')]

    def get_widget_ratings(self):
        '''Get the rating of each ratable widget.'''
        rating_map = {}
        ratings = [(rwidget.widget, rwidget.value)
                   for rwidget in self.get_rwidgets()]
        rating_map.update(ratings)
        return rating_map

    def group_widgets(self):
        '''Group widgets by type.'''
        widgets = {}
        def add2dict(rwidget):
            widget = rwidget.widget
            try:
                widgets[widget.get_type()].append(rwidget)
            except:
                widgets[widget.get_type()] = [rwidget]
        map(add2dict, self.get_rwidgets())
        return widgets

    def get_selects(self):
        '''Get select widget.'''
        def is_select(rwidget):
            return rwidget.widget.get_type() == "select list widget"
        return filter(is_select, self.get_rwidgets())

    def __unicode__(self):
        return '%s says %s' % (self.name, self.title,)


class ReviewWidget(AuditModel):
    review = models.ForeignKey(Review, related_name='widgets')
    widget_type = models.ForeignKey(ContentType)
    widget_id = models.IntegerField()
    widget = generic.GenericForeignKey(ct_field='widget_type',
        fk_field='widget_id')
#    value = models.TextField()
    value = models.IntegerField()

    objects = ReviewWidgetManager()

    def __unicode__(self):
        return '%s: %s=%s' % (self.review, self.widget, self.value,)


class HelpfulVote(AuditModel):
    review = models.ForeignKey(Review, related_name='helpful_votes')
    is_helpful = models.BooleanField()
    user = models.ForeignKey(User, null=True, blank=True)

    objects = HelpfulVoteManager()

    def __unicode__(self):
        return '%s was helpful: %s' % (self.review, self.is_helpful,)
