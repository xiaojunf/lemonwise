from django.contrib.auth.models import User
from django.contrib.comments.models import Comment
from django.contrib.contenttypes.models import ContentType
from django.db.models import Avg

from tastypie.fields import *
from tastypie.resources import ALL, ModelResource

from lemonwise.core.api import LWResource, parse_ratings
from lemonwise.merchant.api import CategoryResource
from lemonwise.reviews.models import *
#from lemonwise.reviews.serializers import CamelCaseJSONSerializer

def parse_comment(comment):
    '''Parse an individual comment.'''
    child_info = {
        'comment': comment.comment,
        'submit_date': comment.submit_date,
        'user_name': comment.user_name
        }
    return child_info

class CommentResource(LWResource):
    children = ListField()

    class Meta(LWResource.Meta):
        queryset = Comment.objects.all()
        excludes = ['id', 'date_updated', 'ip_address', 'is_public',
                    'is_removed', 'object_pk', 'user_email', 'user_url']

    def dehydrate_children(self, bundle):
        children = Comment.objects.for_model(bundle.obj).order_by('-submit_date')
        return map(parse_comment, children)

class ReviewResource(LWResource):
    helpfulness = FloatField(readonly=True)
    rating_widgets = ListField(readonly=True)
    comments = ToManyField('lemonwise.reviews.api.CommentResource', 'comments', full=True, null=True)

    class Meta(LWResource.Meta):
        queryset = Review.objects.all()
        excludes = ['id', 'date_updated']
        filtering = {
            "user": ('exact', 'startswith'),
            "message": ALL,
            "date_created": ('gt', 'lt'),
            "helpfulness": ('gt', 'lt'),
            "describe_yourself": ('contains',),
            "product": ('exact',),
            "would_recommend": ('exact',),
            "verified": ('exact',),
            "describe_yourself": ('exact', 'contains',),
        }

    def dehydrate_helpfulness(self, bundle):
        return bundle.obj.get_helpfulness()

    def dehydrate_rating_widgets(self, bundle):
        return parse_ratings(bundle.obj.get_widget_ratings())
