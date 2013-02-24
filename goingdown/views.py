from weightbot import WeightBot
from goingdown import app
import datetime
import os.path
import json
import csv

@app.route("/")
def index():

    today = datetime.datetime.now().strftime('%m-%d-%Y')
    filename = 'data/weightbot_data_%s.csv'  % today
    data = ''

    # check for a file with a timestamp of today
    if os.path.isfile(filename) == False :

        # if one is not found call weightbot to get data
        username = app.config['WEIGHTBOT_USERNAME']
        password = app.config['WEIGHTBOT_PASSWORD']
        bot = WeightBot(username, password)
        data = bot.get_csv_data()

        # write this to a file.
        f = open(filename, 'w')
        f.write(data)
        f.close()

    # open the file and read data
    f = open(filename, 'r')
    reader = csv.DictReader(f, fieldnames = ('date', 'kilograms', 'pounds'))
    response = json.dumps([ row for row in reader ])
    f.close()

    # print json data to response
    return response

if __name__ == "__main__":
    app.run()
