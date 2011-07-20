from django.db import models
from django.contrib.contenttypes.models import ContentType
from django.db.models.aggregates import Avg
from lemonwise.core.models import AuditModel
from lemonwise.merchant.models import Merchant
from lemonwise.reviews.models import ReviewWidget


class BaseWidget(AuditModel):
    merchant = models.ForeignKey(Merchant)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)

    def get_review_widgets(self):
        content_type = ContentType.objects.get_for_model(self)
        return ReviewWidget.objects.filter(widget_type=content_type, widget_id=self.pk)

    def get_type(self):
        content_type = ContentType.objects.get_for_model(self)
        return content_type.name

    class Meta:
        abstract = True

    def __unicode__(self):
        return '%s: %s' % (self.merchant, self.title,)

class RatingWidget(BaseWidget):
    def get_rating(self, product):
        all_ratings = self.get_review_widgets()
        product_ratings = all_ratings.filter(review__product=product)
        if product_ratings:
            return product_ratings.aggregate(Avg('value'))['value__avg']
        else:
            return None

    class Meta:
        abstract = True


class ThumbsWidget(RatingWidget):
    up_label = models.CharField(max_length=50, null=True, blank=True)
    down_label = models.CharField(max_length=50, null=True, blank=True)


class SliderWidget(RatingWidget):
    min_value = models.IntegerField()
    max_value = models.IntegerField()
    min_label = models.CharField(max_length=50, null=True, blank=True)
    max_label = models.CharField(max_length=50, null=True, blank=True)


class SliderStep(AuditModel):
    slider = models.ForeignKey(SliderWidget, related_name='steps')
    label = models.CharField(max_length=50, null=True, blank=True)
    value = models.IntegerField()

    def __unicode__(self):
        return '%s: %s' % (self.slider, self.label)


class SelectListWidget(BaseWidget):
    allows_multiple = models.BooleanField()


class SelectListItem(AuditModel):
    list = models.ForeignKey(SelectListWidget, related_name='items')
    title = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    value = models.CharField(max_length=100)

    def __unicode__(self):
        return '%s: %s' % (self.list, self.title)
