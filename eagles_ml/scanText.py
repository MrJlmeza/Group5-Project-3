import csv
import boto3

with open('credentials.csv','r') as input:
    next(input)
    reader = csv.reader(input)
    for line in reader:
        access_key_id = line[2]
        secret_access_key = line[3]

photo = 'images/BrandonGraham1.JPG'

client = boto3.client('rekognition',
                    aws_access_key_id = access_key_id,
                    aws_secret_access_key = secret_access_key,
                    region_name='us-east-1')

with open(photo, 'rb') as source_image:
    source_bytes = source_image.read()

response=client.detect_text(Image = {'Bytes' : source_bytes})

textDetections=client['TextDetections']

print ('Detected text\n----------')
for text in textDetections:
        print ('Detected text:' + text['DetectedText'])
        print ('Confidence: ' + "{:.2f}".format(text['Confidence']) + "%")
        print ('Id: {}'.format(text['Id']))
        if 'ParentId' in text:
            print ('Parent Id: {}'.format(text['ParentId']))
        print ('Type:' + text['Type'])
        print()
print(len(textDetections))