from flask import Flask
from flask import request
#from './room_testing'

app = Flask(__name__)
app.debug = True

@app.route('/', methods = ['GET', 'POST'])
# Should be getting a get request with "ready" users in body
def roomGen():
  if request.method == 'GET':
    return 'hi'
  

if __name__ == '__main__':
    app.run()