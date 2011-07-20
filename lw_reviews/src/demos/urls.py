from django.conf.urls.defaults import patterns
from django.conf.urls.defaults import url
from demos import views


urlpatterns = patterns('',
    url(r'', views.demo),
)
