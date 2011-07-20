from django.conf.urls.defaults import patterns
from django.conf.urls.defaults import url
from lemonwise.reviews.handlers import HelpfulVoteHandler, CommentsHandler,\
     WriteReviewHandler,GlanceHandler
from piston.resource import Resource


urlpatterns = patterns('',
    url(r'^(?P<review_id>[\d]+)/helpful/',
        Resource(HelpfulVoteHandler),
        name='api-helpful-vote'),
    url(r'^(?P<review_id>[\d]+)/comments/',
        Resource(CommentsHandler),
        name='api-comments'),
    url(r'^(?P<product_id>[\d]+)/write_review/',
        Resource(WriteReviewHandler),
        name='api-write-review'),
    url(r'^(?P<product_id>[\d]+)/glance/',
        Resource(GlanceHandler),
        name='api-glance'),
)
