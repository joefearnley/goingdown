class Config(object):
    DEBUG = False
    WEIGHTBOT_USERNAME = ''
    WEIGHTBOT_PASSWORD = ''

class ProductionConfig(Config):
    DEBUG = False

class DevelopmentConfig(Config):
    DEBUG = True
