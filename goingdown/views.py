from weightbot import WeightBot
from goingdown import app
from flask import request, make_response
import datetime
import os.path
import json
import csv

@app.route('/', methods=['GET'])
def index():
    """Return weight data as json. Check to see if there is a csv file 
    in the format of weightbot_data_DATE.csv in the /data directory. If 
    it does not call weightbot.com and download it.
    """

    today = datetime.datetime.now().strftime('%m-%d-%Y')
    filename = 'data/weightbot_data_%s.csv'  % today
    data = ''

    if os.path.isfile(filename) == False :
        username = app.config['WEIGHTBOT_USERNAME']
        password = app.config['WEIGHTBOT_PASSWORD']
        bot = WeightBot(username, password)
        data = bot.get_csv_data()

        f = open(filename, 'w')
        f.write(data)
        f.close()

    f = open(filename, 'r')
    reader = csv.DictReader(f, fieldnames = ('date', 'kilograms', 'pounds'))
    data = json.dumps([ row for row in reader ])
    f.close()

    allowed = ['http://localhost', 'http://joefearnley.com/goingdown']
    response = make_response(data)
    origin = request.headers.get('Origin')
    if origin in allowed:
        response.headers['Access-Control-Allow-Origin'] = origin

    return response
