from datetime import datetime
from django.contrib.comments.models import Comment
from django.contrib.contenttypes.models import ContentType
from django.contrib.sites.models import Site
from django.shortcuts import get_object_or_404
from django.template.context import RequestContext
from django.template.loader import render_to_string
from lemonwise.reviews.forms import CommentCreateForm, ReviewForm
from lemonwise.reviews.models import Review, HelpfulVote, ReviewWidget
from lemonwise.merchant.models import Product
from piston.handler import BaseHandler
from piston.utils import rc

TEMPLATETAGS_DIR='lemonwise/templatetags/'
class Formatter(object):
    @staticmethod
    def comment(comment):
        return {
            'pk': comment.pk,
            'message': comment.comment,
            'name': comment.name}

    @staticmethod
    def review(review):
        return {
            'pk': review.pk,
            'message': review.message}


class HelpfulVoteHandler(BaseHandler):
    allowed_methods = ('POST',)

    def create(self, request, review_id):
        review = get_object_or_404(Review, pk=review_id)
        helpful = request.GET.get('helpful', None)

        if helpful:
            helpful = True if helpful =='True' else False

            HelpfulVote.objects.create(
                review=review,
                is_helpful=helpful)

            return rc.CREATED

        return rc.BAD_REQUEST



class GlanceHandler(BaseHandler):
    allowed_methods = ('GET',)

    def read(self,request,product_id):
        product = get_object_or_404(Product, pk=product_id)
        new_context = RequestContext(request, {'product': product})
        json={}
        json['html']=render_to_string(TEMPLATETAGS_DIR + 'core/glance.html', new_context)
        json['review_count']=str(product.reviews.count())
        return json
class CommentsHandler(BaseHandler):
    allowed_methods = ('POST',)

    def create(self, request, review_id):
        review = get_object_or_404(Review, pk=review_id)
        form = CommentCreateForm(request.POST)

        if form.is_valid():
            data = form.cleaned_data

            comment = Comment.objects.create(
                content_object=data['object'],
                user_name=data['name'],
                comment=data['message'],
                submit_date=datetime.now(),
                site=Site.objects.get(pk=1))

            context = RequestContext(request, {
                'review': review,
                'comment': comment,
                'can_reply': isinstance(comment.content_object, Review)})

            json = Formatter.comment(comment)
            json['html'] = render_to_string('lemonwise/templatetags/reviews/review/comment.html',
                context)
            return json

        return rc.BAD_REQUEST

"""handler for writing reviews via REST"""
class WriteReviewHandler(BaseHandler):
    
    allowed_methods = ('POST',)

    def create(self, request, product_id):
        product = get_object_or_404(Product, pk=product_id)
        form = ReviewForm(request.POST)
        
        if form.is_valid():

            #
            print "valid"
            
            data = form.cleaned_data
            rev = self.write_review_fields(product, data)
            rev_widgets = self.write_review_widgets(request.POST, rev, data)

            context = RequestContext(request, {
                    'review': rev,
                    'content_type': ContentType.objects.get_for_model(rev)})

            json = Formatter.review(rev)
            json['html'] = render_to_string(\
                'lemonwise/templatetags/reviews/review.html', context)

            return json

        #
        print "invalid"

        return rc.BAD_REQUEST

    """
        handles writing of standard review fields to database.
        param product: the Product being reviewed
        param data: dictionary of cleaned ReviewForm data
        returns: a Review object
    """
    def write_review_fields(self, product, form_data):
        review = Review()
        review.product = product
        review.would_recommend = form_data['would_recommend']
        review.title = form_data['title']
        review.message = form_data['message']
        review.name = form_data['name']
        review.location = form_data['location']
        review.submit_date = datetime.now()
        review.save()
        return review

    """
        handles writing of review widgets to database.
        param post: the POST QueryDict from the HttpRequest
        param rev: the Review associated with the widgets
        param form_data: dictionary of cleaned ReviewForm data
        returns: a set of ReviewWidgets
    """
    def write_review_widgets(self, post, rev, form_data):        
        widget_types = {}
        widget_ids = {}
        possible_widget_vals = {}

        for k, v in post.items():
            if k not in form_data and k <> "csrfmiddlewaretoken":
                triple = k.rpartition("-")                
                if triple[2] == "widget_type_id":
                    widget_types[triple[0]] = int(v)
                elif triple[2] == "widget_id":
                    widget_ids[triple[0]] = int(v)
                else:
                    possible_widget_vals[k] = v

        rev_widgets = set()

        for k, v in widget_ids.items():
            w_id = v
            val = possible_widget_vals.get(k)
            if val in ('', None):
                continue
            w_tp = ContentType.objects.get(id=widget_types[k])
            rw = ReviewWidget(review=rev,widget_id=w_id,widget_type=w_tp,\
                              value=val)
            rev_widgets.add(rw)
            rw.save()

        return rev_widgets


            
