from weightbot import WeightBot
from flask import Flask
from config import Config
import datetime

#import json
#import csv

app = Flask(__name__)

@app.route("/")
def index():

    # check for a file with a timestamp of today
    # if one is not found call weightbot to get data
    # write this to a file.
    # esle open the file
    # print json data to response

    today = datetime.datetime.now().strftime('%m-%d-%Y')
    filename = 'weightbot_data_%s.csv'  % today
    return filename

if __name__ == "__main__":
    app.run()
