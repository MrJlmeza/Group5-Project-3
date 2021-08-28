import csv
import boto3

def detect_text(photo, bucket):

    with open('credentials.csv','r') as input:
        next(input)
        reader = csv.reader(input)
        for line in reader:
            access_key_id = line[2]
            secret_access_key = line[3]

    
    with open(photo, 'rb') as source_image: 
        source_bytes = source_image.read()
    
    client=boto3.client('rekognition',
                    aws_access_key_id = access_key_id,
                    aws_secret_access_key = secret_access_key,
                    region_name='us-east-1')

    response=client.detect_text(Image = {'Bytes' : source_bytes})
                        
    textDetections=response['TextDetections']
    listofDetectedStrings = []

    print ('Detected text\n----------')
    for text in textDetections:
            print ('Detected text:' + text['DetectedText'])

            listofDetectedStrings.append(text['DetectedText'])

            print ('Confidence: ' + "{:.2f}".format(text['Confidence']) + "%")
            print ('Id: {}'.format(text['Id']))
            if 'ParentId' in text:
                print ('Parent Id: {}'.format(text['ParentId']))
            print ('Type:' + text['Type'])
            print()

    digitsList = [int(i) for i in listofDetectedStrings if i.isdigit()]
    
    #add digits list into a set so we can get unique values within a set of texts
    list_set = set(digitsList)
    # convert the set to the list
    unique_list = (list(list_set))

    print(unique_list)
    return len(textDetections)

def main():
    bucket='bucket'
    photo='static/assets/BrandonGraham_multiPlayers.JPG'
    text_count=detect_text(photo,bucket)
    print("Text detected: " + str(text_count))


if __name__ == "__main__":
    main()