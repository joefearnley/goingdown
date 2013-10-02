goingdown
=========

I've been using weightbot to track my weight loss recently. This is a
[flask](http://flask.pocoo.org/) app that used to fetch the data backed up at
[weightbot.com](http://weightbot.com), write it to
the `/data` directory and e and print the data in json to the HTTP
response. It would only check once a day so and every file has a date appended to it. So if one is already written for that day, it will use that in the
reponse.

After updating it recently, it appears that weeightbot's web version is
broken. So now it just reads the data from the
`data/weightbot_data.csv` file and prints the response. 

The [`gh-pages` branch](http://joefearnley.com/goingdown) contains a front end that contains a visualization of the weightbot data using this app and a link to the repo.

Check it out at http://joefearnley.com/goingdown
