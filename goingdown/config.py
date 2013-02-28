class Config(object):
    DEBUG = False
    WEIGHTBOT_USERNAME = 'joe.fearnley@gmail.com'
    WEIGHTBOT_PASSWORD = '!Joe$ucks1!'

class ProductionConfig(Config):
    DEBUG = False

class DevelopmentConfig(Config):
    DEBUG = True
