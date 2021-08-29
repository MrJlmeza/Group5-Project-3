# import necessary libraries
from re import I
import numpy as np
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect,
    send_from_directory)
import csv
import boto3
from sqlalchemy.sql.expression import true

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
    with open('./eagles_ml/static/credentials.csv','r') as input:
        next(input)
        reader = csv.reader(input)
        for line in reader:
            access_key_id = line[2]
            secret_access_key = line[3]
    access_key_id = access_key_id
    secret_access_key = secret_access_key
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

def getFinalResult(photo):
    results = db.session.query(Eagles_ML.playername, 
                               Eagles_ML.playernumber,
                               Eagles_ML.position,
                               Eagles_ML.height,
                               Eagles_ML.weight,
                               Eagles_ML.age,
                               Eagles_ML.experience,
                               Eagles_ML.college,
                               Eagles_ML.year).all()

    credentials = getCredentials()
    textsDictionary = detect_text(photo, credentials)
    celebDictionary = detect_celebrities(photo, credentials)  

    eagles_ml_data = []
    final_result = []
    
    final_result.append(textsDictionary)
    final_result.append(celebDictionary)
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

    i = 0
    for database in eagles_ml_data:
        for key_detected,value in textsDictionary.items():
            if(str(database["playernumber"]) == key_detected):
                final_result.append(eagles_ml_data[i])
        i=i+1

        
    return jsonify(final_result)


@app.route("/api/eagles_ml/TestImages1")
def get_TestImages1():
    return getFinalResult('./eagles_ml/static/assets/TestImages1.jpg')

@app.route("/api/eagles_ml/TestImages2")
def get_TestImages2():
    return getFinalResult('./eagles_ml/static/assets/TestImages2.jpg')

@app.route("/api/eagles_ml/TestImages3")
def get_TestImages3():
    return getFinalResult('./eagles_ml/static/assets/TestImages3.jpg')

@app.route("/api/eagles_ml/TestImages4")
def get_TestImages4():
    return getFinalResult('./eagles_ml/static/assets/TestImages4.jpg')

@app.route("/api/eagles_ml/TestImages5")
def get_TestImages5():
    return getFinalResult('./eagles_ml/static/assets/TestImages5.jpg')

@app.route("/api/eagles_ml/TestImages6")
def get_TestImages6():
    return getFinalResult('./eagles_ml/static/assets/TestImages6.jpg')

@app.route("/api/eagles_ml/TestImages7")
def get_TestImages7():
    return getFinalResult('./eagles_ml/static/assets/TestImages7.jpg')

@app.route("/api/eagles_ml/TestImages8")
def get_TestImages8():
    return getFinalResult('./eagles_ml/static/assets/TestImages8.jpg')

@app.route("/api/eagles_ml/TestImages9")
def get_TestImages9():
    return getFinalResult('./eagles_ml/static/assets/TestImages9.jpg')

@app.route("/api/eagles_ml/TestImages10")
def get_TestImages10():
    return getFinalResult('./eagles_ml/static/assets/TestImages10.jpg')

@app.route("/api/eagles_ml/TestImages11")
def get_TestImages11():
    return getFinalResult('./eagles_ml/static/assets/TestImages11.jpg')

@app.route("/api/eagles_ml/TestImages12")
def get_TestImages12():
    return getFinalResult('./eagles_ml/static/assets/TestImages12.jpg')

@app.route("/api/eagles_ml/TestImages13")
def get_TestImages13():
    return getFinalResult('./eagles_ml/static/assets/TestImages13.jpg')

@app.route("/api/eagles_ml/TestImages14")
def get_TestImages14():
    return getFinalResult('./eagles_ml/static/assets/TestImages14.jpg')

@app.route("/api/eagles_ml/TestImages15")
def get_TestImages15():
    return getFinalResult('./eagles_ml/static/assets/TestImages15.jpg')




if __name__ == "__main__":
    app.run()
    
