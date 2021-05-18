from flask import Flask
from Logger import Logger
from json import loads

app = Flask(__name__)

@app.route('/')
def index():
    """TODO: Docstring for index.
    :returns: TODO

    """
    with open('./data/data.json', mode='r') as my_file:
        text = loads(my_file.read())
        return text

@app.route('/<branch>')
def old(branch):
    """TODO: Docstring for index.
    :returns: TODO

    """
    branch = branch.upper()
    with open(f'./data/data_{branch}.json', mode='r') as my_file:
        text = loads(my_file.read())
        return text

@app.route('/fetch/<branch>')
def latest(branch):
    branch = branch.upper()
    ret = Logger(branch)
    return  ret.Ret_Links()
