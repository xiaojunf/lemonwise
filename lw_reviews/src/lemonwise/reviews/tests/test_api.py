#from django.test import TestCase
#from django.utils import simplejson
#from lemonwise.reviews.models import *

##
##class MerchantResourceTests(TestCase):
##    fixtures = ('site', 'merchant',)
##
##    def setUp(self):
##        self.merchant = Merchant.objects.get(name='Warby Parker')
##
##    def test_get_list(self):
##        response = self.client.get('/api/v1/merchant/')
##        json = simplejson.loads(response.content)
##
##        self.assertEquals(response.status_code, 200)
##        self.assertEquals(json['meta']['totalCount'], 1)
##        self.assertEquals(len(json['objects']), 1)
##
##        merchant = json['objects'][0]
##
##        self.assertEquals(merchant['domain'], 'http://warbyparker.com/')
##        self.assertEquals(merchant['id'], '1')
##        self.assertEquals(merchant['name'], 'Warby Parker')
##        self.assertEquals(len(merchant['productFamilies']), 1)
##        self.assertEquals(merchant['productFamilies'][0],
##            '/api/v1/productfamily/1/')
##
##    def test_get(self):
##        url = '/api/v1/merchant/%s/' % self.merchant.pk
##
##        response = self.client.get(url)
##        json = simplejson.loads(response.content)
##
##        self.assertEquals(json['domain'], 'http://warbyparker.com/')
##        self.assertEquals(json['id'], '1')
##        self.assertEquals(json['name'], 'Warby Parker')
##        self.assertEquals(len(json['productFamilies']), 1)
##        self.assertEquals(json['productFamilies'], ['/api/v1/productfamily/1/'])
##
##
##class ProductFamilyResourceTests(TestCase):
##    fixtures = ('site', 'merchant',)
##
##    def setUp(self):
##        self.merchant = Merchant.objects.get(name='Warby Parker')
##        self.product_family = self.merchant.product_families.all()[0]
##
##    def test_get_list(self):
##        response = self.client.get('/api/v1/productfamily/')
##        json = simplejson.loads(response.content)
##
##        self.assertEquals(response.status_code, 200)
##        self.assertEquals(json['meta']['totalCount'], 1)
##        self.assertEquals(len(json['objects']), 1)
##
##        family = json['objects'][0]
##
##        self.assertEquals(family['id'], '1')
##        self.assertEquals(family['identifier'], 'zagg-family')
##        self.assertEquals(family['merchant'], '/api/v1/merchant/1/')
##        self.assertEquals(len(family['products']), 1)
##        self.assertEquals(family['products'], ['/api/v1/product/1/'])
##
##    def test_get(self):
##        url = '/api/v1/productfamily/%s/' % self.product_family.pk
##
##        response = self.client.get(url)
##        json = simplejson.loads(response.content)
##
##        self.assertEquals(json['id'], '1')
##        self.assertEquals(json['identifier'], 'zagg-family')
##        self.assertEquals(json['merchant'], '/api/v1/merchant/1/')
##        self.assertEquals(len(json['products']), 1)
##        self.assertEquals(json['products'], ['/api/v1/product/1/'])
##
##class ProductResourceTests(TestCase):
##    fixtures = ('site', 'merchant','review')
##    def setUp(self):
##        self.product_family=ProductFamily.objects.get(identifier='zagg-family')
##        self.product=self.product_family.products.all()[0]
##
##    def test_get_list(self):
##        response=self.client.get('/api/v1/product/')
##        json=simplejson.loads(response.content)
####        print json
##
##        self.assertEquals(response.status_code,200)
##        self.assertEquals(json['meta']['total_count'],1)
##        self.assertEquals(len(json['objects']),1)
##
##        product=json['objects'][0]
##
##        self.assertEquals(product['id'],'1')
##        self.assertEquals(product['name'],'Zagg')
##        self.assertEquals(product['family'],'/api/v1/productfamily/1/')
##        self.assertEquals(len(product['attributes']),8)
##        self.assertEquals(product['uses'][0],'software manager')
##
##    def test_get(self):
##        url = '/api/v1/product/%s/' %self.product.pk
##
##        response=self.client.get(url)
##        json=simplejson.loads(response.content)
##
##        self.assertEquals(json['id'],'1')
##        self.assertEquals(json['name'],'Zagg')
##        self.assertEquals(json['family'],'/api/v1/productfamily/1/')
##        self.assertEquals(len(json['attributes']),8)
##        self.assertEquals(json['uses'][0],'software manager')
##
##class BooleanAttributeTests(TestCase):
##    fixtures=('site','merchant')
##    def setUp(self):
##        self.booleanAttribute=BooleanAttribute.objects.get(name='Style')
##
##    def test_get_list(self):
####        print self.booleanAttribute
##        response = self.client.get('/api/v1/booleanattribute/')
##        json=simplejson.loads(response.content)
##
##        self.assertEquals(response.status_code,200)
##        self.assertEquals(json['meta']['total_count'],5)
##        self.assertEquals(len(json['objects']),5)
##
##        attribute=json['objects'][0]
##
##        self.assertEquals(attribute['id'],'1')
##        self.assertEquals(attribute['name'],'Style')
##        self.assertEquals(attribute['description'],'Do they look awesome?')
##
##    def test_get(self):
##        url='/api/v1/booleanattribute/%s/' %self.booleanAttribute.pk
##
##        response=self.client.get(url)
##        json=simplejson.loads(response.content)
##
##        self.assertEquals(json['id'],'1')
##        self.assertEquals(json['name'],'Style')
##        self.assertEquals(json['description'],'Do they look awesome?')
##
##class SlideAttributeTests(TestCase):
##    fixtures=('site','merchant')
##    def setUp(self):
##        self.slideAttribute=SlideAttribute.objects.get(name='Bridge')
##
##    def test_get_list(self):
####        print self.booleanAttribute
##        response = self.client.get('/api/v1/slideattribute/')
##        json=simplejson.loads(response.content)
##
##
##        self.assertEquals(response.status_code,200)
##        self.assertEquals(json['meta']['total_count'],3)
##        self.assertEquals(len(json['objects']),3)
##
##        attribute=json['objects'][0]
##
##        self.assertEquals(attribute['id'],'1')
##        self.assertEquals(attribute['name'],'Bridge')
##        self.assertEquals(attribute['description'],'How did they fit on the nose?')
##
##    def test_get(self):
##        url='/api/v1/slideattribute/%s/' %self.slideAttribute.pk
##
##        response=self.client.get(url)
##        json=simplejson.loads(response.content)
##
##        self.assertEquals(json['id'],'1')
##        self.assertEquals(json['name'],'Bridge')
##        self.assertEquals(json['description'],'How did they fit on the nose?')
##
##class ProductAttributeTests(TestCase):
##    fixtures=('site','merchant','review')
##    def setUp(self):
##        self.product=Product.objects.get(name='Zagg')
##        self.product_attribute=self.product.attributes.all()[0]
##
##    def test_get_list(self):
##        response=self.client.get('/api/v1/productattribute/')
##        json=simplejson.loads(response.content)
##
##        self.assertEquals(response.status_code,200)
##        self.assertEquals(json['meta']['totalCount'],8)
##        self.assertEquals(len(json['objects']),8)
##
##        product_attribute=json['objects'][0]
##
##        self.assertEquals(product_attribute['product'],'/api/v1/product/1/')
##        self.assertEquals(product_attribute['name'],'Bridge')
##        self.assertEquals(product_attribute['attributeId'],1)
##        self.assertEquals(product_attribute['id'],'1')
##
##    def test_get(self):
##        url='/api/v1/productattribute/%s/' %self.product_attribute.pk
##
##        response=self.client.get(url)
##        json=simplejson.loads(response.content)
##
##        self.assertEquals(json['product'],'/api/v1/product/1/')
##        self.assertEquals(json['name'],'Bridge')
##        self.assertEquals(json['attributeId'],1)
##        self.assertEquals(json['id'],'1')

##class ReviewTests(TestCase):
##    fixtures=('site','merchant','review')
##    def setUp(self):
##        self.product=Product.objects.get(name='Zagg')
##        self.review=self.product.reviews.all()[0]
##
##    def test_get_list(self):
##        response=self.client.get('/api/v1/review/')
##        json=simplejson.loads(response.content)
##
##        self.assertEquals(response.status_code,200)
##        self.assertEquals(json['meta']['total_count'],3)
##        self.assertEquals(len(json['objects']),3)
##
##        review=json['objects'][0]
##
##        self.assertEquals(review['product']['id'],'1')
##        self.assertEquals(review['title'],'These glasses are amazing!')
##        self.assertEquals(review['name'],'David Gandy')
##        self.assertEquals(review['location'],'Boston, MA')
##
##    def test_get(self):
##        url='/api/v1/review/%s/' %self.review.pk
##
##        response=self.client.get(url)
##        json=simplejson.loads(response.content)
##
##        self.assertEquals(json['product']['id'],'1')
##        self.assertEquals(json['title'],'These glasses are amazing!')
##        self.assertEquals(json['name'],'David Gandy')
##        self.assertEquals(json['location'],'Boston, MA')
##
##class ReviewProductAttributeTests(TestCase):
##    fixtures=('site','merchant','review')
##
##    def setUp(self):
##        self.review=Review.objects.get(id=1)
##        self.review_Product_Attribute=self.review.product_attributes.all()[0]
##
##    def test_get_list(self):
##        response=self.client.get('/api/v1/reviewproductattribute/')
##        json=simplejson.loads(response.content)
##
##        self.assertEquals(response.status_code,200)
##        self.assertEquals(json['meta']['total_count'],16)
##        self.assertEquals(len(json['objects']),16)
##
##        review_product_attribute=json['objects'][0]
##
##        self.assertEquals(review_product_attribute['product_attribute'],'/api/v1/productattribute/1/')
##        self.assertEquals(review_product_attribute['review']['name'],'David Gandy')
##        self.assertEquals(review_product_attribute['review']['title'],'These glasses are amazing!')
##        self.assertEquals(review_product_attribute['rating'],85.0)
##    def test_get(self):
##        url='/api/v1/reviewproductattribute/%s/' %self.review_Product_Attribute.pk
##
####        print self.review_Product_Attribute
##        response=self.client.get(url)
##        json=simplejson.loads(response.content)
##
##        self.assertEquals(json['product_attribute'],'/api/v1/productattribute/1/')
##        self.assertEquals(json['review']['name'],'David Gandy')
##        self.assertEquals(json['review']['title'],'These glasses are amazing!')
##        self.assertEquals(json['rating'],85.0)
##
##
##class CommentTests(TestCase):
##    fixtures=('site','merchant','review')
##    def setUp(self):
##        self.comment=Comment.objects.get(id=1)
##    def test_get_list(self):
##        response=self.client.get('/api/v1/comment/')
##        json=simplejson.loads(response.content)
##
##        self.assertEquals(response.status_code,200)
##        self.assertEquals(json['meta']['total_count'],2)
##        self.assertEquals(len(json['objects']),2)
##
##        comment=json['objects'][0]
##
##        self.assertEquals(comment['id'],'1')
##        self.assertEquals(comment['user_name'],'Travis Chase')
##        self.assertEquals(comment['resource_uri'],'/api/v1/comment/1/')
##
##    def test_get(self):
##        url='/api/v1/comment/%s/' %self.comment.pk
##
##        response=self.client.get(url)
##        json=simplejson.loads(response.content)
##
##        self.assertEquals(json['id'],'1')
##        self.assertEquals(json['user_name'],'Travis Chase')
##        self.assertEquals(json['resource_uri'],'/api/v1/comment/1/')
#
#
#class HelpfulVoteTests(TestCase):
#    fixtures=('site','merchant','review')
#    def setUp(self):
#        self.submission=Review.objects.get(id=1)
#        self.helpfulvote=self.submission.helpfulvote_set.all()
#    def test_get_list(self):
#        response=self.client.get('/api/v1/helpfulvote/')
#        json=simplejson.loads(response.content)
#        print json
###        print json
#####        print json['votes']
###        print self.helpfulvote.is_helpful
###        print self.helpfulvote.review
