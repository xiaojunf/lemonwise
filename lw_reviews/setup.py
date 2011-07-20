from setuptools import setup, find_packages
import sys, os

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, 'README.rst')).read()


version = '0.1'

install_requires = [
    # List your project dependencies here.
    # For more details, see:
    # http://packages.python.org/distribute/setuptools.html#declaring-dependencies
]


setup(name='lw_reviews',
    version=version,
    description="",
    long_description=README,
    classifiers=[
      # Get strings from http://pypi.python.org/pypi?%3Aaction=list_classifiers
    ],
    keywords='',
    author='Lemonwise',
    author_email='admin@lemonwi.se',
    url='http://lemonwi.se',
    license='',
    packages=find_packages('src'),
    package_dir = {'': 'src'},
    include_package_data=True,
    zip_safe=False,
    install_requires=install_requires,
    entry_points={
        'nose.plugins.0.10': [
            'testsetup-lemonwise = '
            'lemonwise.utils.testharness.noseplugin:LemonwiseReviewsTestSetup']
    }
)
