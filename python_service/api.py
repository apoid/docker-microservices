import json
from flask import Flask
from flask_restful import request

app = Flask(__name__)
api = Api(app)

@app.route('/', methods=["GET"])
def root():
    return 'root path'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5090, debug=True)