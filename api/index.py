from flask import Flask
from Logger import Logger
from json import loads
from apscheduler.schedulers.background import BackgroundScheduler
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    """TODO: Docstring for index.
    :returns: TODO

    """
    return "Instead Try /cached/air_a or /cached/air_b" 

@app.route('/cached/<branch>')
def cached(branch):
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

def refetch():
    print("refetching")
    branches = ["AIR_A","AIR_B"]

    for branch in branches:
        Logger(branch).Ret_Links()
        print(f"refetched {branch}")

scheduler = BackgroundScheduler()
job = scheduler.add_job(refetch, 'interval', minutes=60)
scheduler.start()

