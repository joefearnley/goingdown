goingdown
=========

I've been using weightbot to track my weight loss recently. This is a
[flask](http://flask.pocoo.org/) app that will fetch the data backed up at
[weightbot.com](http://weightbot.com), write it to
the `/data` directory and print the data in json to the HTTP response. It will only check once a day so and every file has a date appended to it. So if one is already written for that day, it will use that in the
reponse. The `/data` directory only contains a sample file. It will
ignore files added in the future.

The [`gh-pages` branch](http://joefearnley.com/goingdown) contains a front end that contains a visualization
of the weightbot data using this app and a link to the repo.
