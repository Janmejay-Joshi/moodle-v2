
# load Required libraries and method

import getopt, sys
import Links 
import requests
from datetime import datetime
from json import dumps, loads 
from lxml import html
from bs4 import BeautifulSoup
from time import sleep
import environ

env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)
# reading .env file
environ.Env.read_env()

class Logger:

    """Docstring for MyClass. """

    def __init__(self, Branch):
        self.branch = Branch
        self.cred = self.PreProcess()

    def PreProcess(self):

        USERNAME = env(f'USERNAME_{self.branch}')
        PASSWORD = env(f'PASSWORD_{self.branch}')
        LOGIN_URL = "http://op2020.mitsgwalior.in/login/index.php" 

        cred0 = [LOGIN_URL,USERNAME,PASSWORD]
        return cred0

    def Ret_Links(self):
            
            LOGIN_URL,USERNAME,PASSWORD = self.cred 
            #Aporach Schedule
            print("Loging in...", end = "\r")

            
            # Setup session and cookies
            session_requests = requests.session()

            # Get login csrf token
            result = session_requests.get(LOGIN_URL)
            tree = html.fromstring(result.text)
            authenticity_token = list(set(tree.xpath("//input[@name='logintoken']/@value")))[0]

            # Create payload
            payload = {
                "username": USERNAME, 
                "password": PASSWORD, 
                "logintoken": authenticity_token
            }

            # Perform login
            result = session_requests.post(LOGIN_URL, data = payload, headers = dict(referer = LOGIN_URL))

            if result.url == LOGIN_URL:
                print("Invalid Credentials: Edit .env variables")
                exit(0)
            else:
                print("Logged in...")

            # Mark Atendance

            with open('./metadata/metadata.json', mode='r') as my_file:
                lectures = loads(my_file.read())[f"{self.branch}"]

            Detail = Links.Attendance(session_requests)
            Details = {"last_updated":str(datetime.now()),"data":{"assignments":[],"quizes":[]}}

            for lecture in lectures:
                try:
                    Details["data"]["assignments"].extend(Detail.Scrape(lecture))
                    print("\n+_+_+_+_+_+_+_+_+\n")

                except Exception as e:
                    print(e)
            try:
                Details["data"]["assignments"] = sorted(Details["data"]["assignments"],key = lambda k: int(k["time_left"].split(" ")[0]))
            except Exception:
                pass

            with open(f'data/data_{self.branch}.json', mode='w') as my_file:
                    my_file.write(dumps(Details))
            
            return Details
