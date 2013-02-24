from flask import Flask
app = Flask(__name__)

# change this to the config class you would like to use.
app.config.from_object('goingdown.config.DevelopmentConfig')

import goingdown.views
