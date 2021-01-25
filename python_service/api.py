import json
from flask import Flask
from flask_restful import request

app = Flask(__name__)
api = Api(app)

@app.route('/', methods=["GET"])
def root():
    return 'root path'

@app.route('/products/<path:path>', methods=["GET", "POST"])
def proxy_to_products_service(path):
    if request.method=='GET':
        resp = requests.get(f'{SITE_NAME}{path}')
        excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
        headers = [(name, value) for (name, value) in     resp.raw.headers.items() if name.lower() not in excluded_headers]
        response = Response(resp.content, resp.status_code, headers)
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5090, debug=True)