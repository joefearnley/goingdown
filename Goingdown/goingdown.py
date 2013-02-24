
from weightbot import WeightBot
from pprint import pprint
import json 

bot = WeightBot('joe.fearnley@gmail.com', 'heritag1')
data = bot.get_data()

json.dumps(data)
