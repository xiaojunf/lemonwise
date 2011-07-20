from nose.plugins.base import Plugin
from django.core.management import setup_environ
from website import settings


class LemonwiseReviewsTestSetup(Plugin):
    """
    Nose plugin that sets up the environment needed to test
    """
    enabled = True
    name = 'testsetup-lemonwise'

    old_config = None
    runner = None

    def __init__(self, *args, **kwargs):
        # Import client here to patch Django's own version
        from lemonwise.utils.testharness import client

        super(LemonwiseReviewsTestSetup, self).__init__(*args, **kwargs)

    def options(self, parser, env):
        super(LemonwiseReviewsTestSetup, self).options(parser, env)

    def begin(self):
        from django.test.simple import DjangoTestSuiteRunner

        setup_environ(settings)

        self.runner = DjangoTestSuiteRunner()
        self.runner.setup_test_environment()
        self.old_config = self.runner.setup_databases()

    def finalize(self, result):
        self.runner.teardown_databases(self.old_config)
        self.runner.teardown_test_environment()