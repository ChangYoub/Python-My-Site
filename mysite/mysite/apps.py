# Download Info : pip install https://github.com/darklow/django-suit/tarball/v2
from suit.apps import DjangoSuitConfig

class SuitConfig(DjangoSuitConfig) :
    layout = 'vertical' # 'horizontal'
