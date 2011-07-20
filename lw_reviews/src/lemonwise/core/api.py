from django.contrib.auth.models import User

from tastypie.fields import *
from tastypie.resources import ALL, ModelResource

#from lemonwise.reviews.serializers import CamelCaseJSONSerializer

def parse_rating(widget, value):
    '''Parse a rating for an individual widget.'''
    widget_info = {'title': widget.title}
    try:
        widget_info['value'] = float(value)
    except:
        widget_info['value'] = value
    return widget_info

def parse_ratings(ratings):
    '''Parse all the rating from a dictionary of widget ratings.'''
    return [parse_rating(widget, value) for widget, value in ratings.items()]

class LWResource(ModelResource):
    '''Conviently hides id, uri's, and date stuff.'''
    class Meta:
        excludes = ['id', 'date_created', 'date_updated']
        include_resource_uri = False

class Protected(LWResource):
    '''A super class for authentication stuff.'''
    class Meta(LWResource.Meta):
        pass
        #authentication = DomainAuthentication()
        #authorization = TokenAuthorization()

class UserResource(ModelResource):
    class Meta(LWResource.Meta):
        queryset = User.objects.all()
        excludes = ['email', 'password']
        allowed_methods = ['get']
        filtering = {
            "name": ('exact', 'startswith',),
        }
        include_resource_uri = False
