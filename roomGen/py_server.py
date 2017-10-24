from flask import Flask
from flask import request
from . import room_testing

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
# Should be getting a get request with "ready" users in body
def roomGen():
  if request.method == 'POST':
    req_data = request.get_json()
    name = req_data['name']
    #return room_testing.make_room(request.body, 4)

    return name

if __name__ == '__main__':
    app.run()