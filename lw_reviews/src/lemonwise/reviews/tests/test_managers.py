from django.test import TestCase
from lemonwise.merchant.models import Product
from lemonwise.reviews.models import HelpfulVote, Review


class HelpfulVoteManagerTests(TestCase):
    fixtures = ('merchant', 'widget', 'review',)

    def setUp(self):
        self.product = Product.objects.get(sku='ZAGG-RBM1234')

    def test_most_helpful_review_positive(self):
        review = HelpfulVote.objects.most_helpful_review(self.product)

        self.assertTrue(review.would_recommend)
        self.assertEquals(review.title, 'Awesome glasses')
        self.assertEquals(review.name, 'David Gandy')
        self.assertEquals(review.location, 'Cambridge, MA')


    def test_most_helpful_review_negative(self):
        review = HelpfulVote.objects.most_helpful_review(self.product,
            get_negative=True)

        self.assertIsNone(review)

        new_review = Review.objects.create(
            product=self.product,
            would_recommend=False,
            title='Not as good as advertised',
            name='Joe Smith',
            location='San Francisco, CA')

        HelpfulVote.objects.create(review=new_review, is_helpful=True)
        HelpfulVote.objects.create(review=new_review, is_helpful=True)

        review = HelpfulVote.objects.most_helpful_review(self.product,
            get_negative=True)

        self.assertFalse(review.would_recommend)
        self.assertEquals(review.title, 'Not as good as advertised')
        self.assertEquals(review.name, 'Joe Smith')
        self.assertEquals(review.location, 'San Francisco, CA')