from http.server import BaseHTTPRequestHandler
from json import loads

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        branch = branch.upper()
        with open(f'./data/data_{branch}.json', mode='r') as my_file:
            text = loads(my_file.read())

        self.wfile.write(text)
        return
