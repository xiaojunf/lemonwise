from django.conf.urls.defaults import patterns
from django.conf.urls.defaults import url
from lemonwise.reviews import views


urlpatterns = patterns('',
    url(r'^$', views.reviews),
    url(r'^design-static/', views.design_static),
)
