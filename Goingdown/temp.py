
import csv
import json

f = open("data.csv", "r")
reader = csv.DictReader(f, fieldnames = ( "date","kilograms","pounds" ))
data = json.dumps( [ row for row in reader ] )

print out

