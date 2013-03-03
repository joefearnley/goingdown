import os

class Config(object):
    DEBUG = False
    WEIGHTBOT_USERNAME = os.environ['WEIGHTBOT_USERNAME']
    WEIGHTBOT_PASSWORD = os.environ['WEIGHTBOT_PASSWORD']

class ProductionConfig(Config):
    DEBUG = False

class DevelopmentConfig(Config):
    DEBUG = True
