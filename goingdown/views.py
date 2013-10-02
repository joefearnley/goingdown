from goingdown import app
from flask import request
from crossdomain import crossdomain
import datetime
import os.path
import json
import csv

@app.route('/', methods=['GET'])
@crossdomain(origin='*')
def index():
    """Return weight data as json"""
    filename = 'data/weightbot_data.csv'
    data = ''

    f = open(filename, 'r')
    reader = csv.DictReader(f, fieldnames = ('date', 'kilograms', 'pounds'))
    response = json.dumps([ row for row in reader ])
    f.close()

    return response
