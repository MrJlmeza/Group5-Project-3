# import necessary libraries
import numpy as np
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
import csv
import boto3

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

def getCredentials():
    with open('credentials.csv','r') as input:
        next(input)
        reader = csv.reader(input)
        for line in reader:
            access_key_id = line[2]
            secret_access_key = line[3]

    return access_key_id, secret_access_key

def detect_text(photo, credentials):
   
    access_key_id = credentials[0]
    secret_access_key = credentials[1]
    
    with open(photo, 'rb') as source_image: 
        source_bytes = source_image.read()
    
    client=boto3.client('rekognition',
                    aws_access_key_id = access_key_id,
                    aws_secret_access_key = secret_access_key,
                    region_name='us-east-1')

    response=client.detect_text(Image = {'Bytes' : source_bytes})
                        
    textDetections=response['TextDetections']
    listofDetectedStrings = []
    confidence = []
    for text in textDetections:
            listofDetectedStrings.append(text['DetectedText'])
            confidence.append(text['Confidence'])

    #Create a dictionary of texts detected and confidences
    resultDictionary = {listofDetectedStrings[i]: confidence[i] for i in range(len(listofDetectedStrings))}

    final_result = {}

    #Remove duplicate keys
    for key,value in resultDictionary.items():
        if key not in final_result.keys():
            final_result[key] = value

    return final_result

def detect_celebrities(photo, credentials):

    access_key_id = credentials[0]
    secret_access_key = credentials[1]
    
    client=boto3.client('rekognition',
                    aws_access_key_id = access_key_id,
                    aws_secret_access_key = secret_access_key,
                    region_name='us-east-1')

    with open(photo, 'rb') as image:
        response = client.recognize_celebrities(Image={'Bytes': image.read()})

    print('Detected faces for ' + photo) 
    listOfCelebs = []
    confidenceList = []
    for celebrity in response['CelebrityFaces']:
        listOfCelebs.append(celebrity['Name'])
        confidenceList.append(celebrity['Face']['Confidence'])

    #Create a dictionary of celebs and confidences
    resultDictionary = {listOfCelebs[i]: confidenceList[i] for i in range(len(listOfCelebs))}

    final_result = {}

    #Remove duplicate keys
    for key,value in resultDictionary.items():
        if key not in final_result.keys():
            final_result[key] = value

    return final_result


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


@app.route("/api/eagles_ml/<photo>")
def eaglesml_get(photo):
    credentials = getCredentials()
    # bucket='bucket'
    textsDictionary = detect_text(photo, credentials)
    celebDictionary = detect_celebrities(photo, credentials)  

    #For each key in player textsDictionary, and textsDictionary, go to the database and find the player row that 
    #corresponds to it

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
    
