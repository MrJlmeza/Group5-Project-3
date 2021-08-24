# import necessary libraries
import numpy as np
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from .models import Eagles_ML


# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")


# # Query the database and send the jsonified results
# @app.route("/send", methods=["GET", "POST"])
# def send():
    if request.method == "POST":
        date = request.form["date"]
        establishment = request.form["establishment"]
        total = request.form["total"]
        tip = request.form["tip"]
        grubhub = request.form["grubhub"]
        timePay = request.form["timePay"]
        mileagePay = request.form["mileagePay"]
        miles = request.form["miles"]
        bonus = request.form["bonus"]
        acceptedAt = request.form["acceptedAt"]
        streetName = request.form["streetName"]
        city = request.form["city"]
        zip = request.form["zip"]
        canceled = request.form["canceled"]
        popUp = request.form["popUp"]
        type = request.form["type"]
        lat = request.form["lat"]
        long = request.form["long"]
        rating = request.form["rating"]

        eagles_ml = Eagles_ML(
            date = date,
            establishment = establishment,
            total = total,
            tip = tip,
            grubhub = grubhub,
            timePay = timePay,
            mileagePay = mileagePay,
            miles = miles,
            bonus = bonus,
            acceptedAt = acceptedAt,
            streetName = streetName,
            city = city,
            zip = zip,
            canceled = canceled,
            popUp = popUp,
            type = type,
            lat = lat,
            long = long,
            rating = rating
        )

        db.session.add(eagles_ml)
        db.session.commit()
        return redirect("/", code=302)

    return render_template("form.html")


@app.route("/api/eagles_ml")
def eaglesml_get():
    results = db.session.query(Eagles_ML.playername, 
                               Eagles_ML.playernumber,
                               Eagles_ML.position,
                               Eagles_ML.height,
                               Eagles_ML.weight,
                               Eagles_ML.age,
                               Eagles_ML.experience,
                               Eagles_ML.college,
                               Eagles_ML.year).all()

    eagles_ml_data = []
   
    for playername, playernumber, position, height, weight, age, experience, college, year in results:
        data_dict = {}
        data_dict["playername"] = playername
        data_dict["playernumber"] = playernumber
        data_dict["position"] = position
        data_dict["height"] = height
        data_dict["weight"] = weight
        data_dict["age"] = age
        data_dict["experience"] = experience
        data_dict["college"] = college
        data_dict["year"] = year
        eagles_ml_data.append(data_dict)

    return jsonify(eagles_ml_data)



if __name__ == "__main__":
    app.run()
