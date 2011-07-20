from django.db import models
from django.db.models.aggregates import Count
from django.contrib.contenttypes.models import ContentType


class HelpfulVoteManager(models.Manager):
    def most_helpful_review(self, product, would_recommend):
        from lemonwise.reviews.models import Review

        helpful = self.filter(review__product=product,
            review__would_recommend=would_recommend, is_helpful=True).values(
            'review').annotate(helpful=Count('id')).order_by('-helpful')

        if helpful:
            return Review.objects.get(pk=helpful[0]['review'])

        return None

class ReviewWidgetManager(models.Manager):
    def for_widget(self, widget):
        content_type = ContentType.objects.get_for_model(widget)
        return self.filter(widget_type=content_type, widget_id=widget.pk)
