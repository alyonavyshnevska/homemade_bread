import os
import json
import datetime
from flask import Flask, render_template, jsonify, Response, make_response
from flask_api import status
from flask_cors import CORS
from pymongo import MongoClient
# from flask_pymongo import PyMongo
import pprint
# from bson.json_util import loads, dumps


# create a MongoClient to the running mongod instance on the default host and port
client = MongoClient()

# connect to mongoDB
db = client.homemade_bread
collect = db.bread

# This current file __name__ represents my web application.
# We are creating an instance of the Flask class and calling it app
# Here we are creating a new web application.
app = Flask(__name__)
CORS(app)

@app.route("/")
# When the user goes to my website and they go to 
# the default page (nothing after the slash), then the function below will get activated.
def home():
    return "Hi"


@app.route("/data")
def data():

    items_raw = collect.find({})
    items = jsonify([dict(i) for i in list(items_raw)])
    print(type(items))
    # for i in items: 
    #     print(i)
    if items is not None:
        return items, status.HTTP_200_OK
    else:
        return "Records not found", status.HTTP_404_NOT_FOUND


@app.route('/data/<id>')
def data_id(id):

    item = collect.find_one({"_id": int(id)})
    print(item)
    if item is not None:
        # wraps json methods and provides explicit BSON conversion to JSON
        return item, status.HTTP_200_OK
    else:
        return "Record not found", status.HTTP_404_NOT_FOUND

if __name__ == "__main__":
    app.run(debug=True)