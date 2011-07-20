from django.conf import settings
from django.conf.urls.defaults import patterns, include, url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

admin.autodiscover()

from tastypie.api import Api

v1_api = Api(api_name='v1')

from lemonwise.merchant.api import CategoryResource, ProductResource
#v1_api.register(MerchantResource())
v1_api.register(CategoryResource())
v1_api.register(ProductResource())

from lemonwise.reviews.api import ReviewResource, CommentResource
v1_api.register(ReviewResource())
v1_api.register(CommentResource())


urlpatterns = patterns('',
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),
    url(r'^admin/', include(admin.site.urls)),

    # Lemonwise apps
    url(r'^reviews/', include('lemonwise.reviews.urls.views')),

    # Demos
    url(r'^demo/', include('demos.urls')),

    #API
    url(r'^api/reviews/', include('lemonwise.reviews.urls.rest')),
    url(r'^api/', include(v1_api.urls)),
)

if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
