"""
This file demonstrates writing tests using the unittest module. These will pass
when you run "manage.py test".

Replace this with more appropriate tests for your application.
"""

from django.test import TestCase
class WarbyParkerTest(TestCase):
    fixtures = ('comment', 'merchant','review','site','tag','widget');
    def test_get(self):
        url="/demo/warbyparker.com/"
        response = self.client.get(url)
        self.assertEquals(response.status_code,200)
        





class SimpleTest(TestCase):
    def test_basic_addition(self):
        """
        Tests that 1 + 1 always equals 2.
        """
        self.assertEqual(1 + 1, 2)
