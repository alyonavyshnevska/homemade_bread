from flask import Flask, render_template, jsonify, Response, make_response
from flask_api import status
from flask_cors import CORS

d = {"02": {"title": "I'd had quite a lot to drink and broke into song"}, 
    "01": {"title": "I put on perfume for a video call"}, 
    "03": {"title": "He seems like he’d give good hugs"}}

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
    # return render_template("home.html")


@app.route("/data")
def data():

    d_new = []
    for k,v in d.items():
        d_new.append({"id": k, "title" : v["title"]})

    return jsonify(d_new), status.HTTP_200_OK
    # return render_template("data.html") 


@app.route('/data/<id>')
def data_id(id):
    if id in d.keys():
        d_new = {"id": id, "title" : d[id]["title"]}
        return jsonify(d_new), status.HTTP_200_OK
    else:
        return "Record not found", status.HTTP_404_NOT_FOUND


if __name__ == "__main__":
    app.run(debug=True)