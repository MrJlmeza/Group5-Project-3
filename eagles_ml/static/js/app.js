function GetTessaractOCR()
{
  Tesseract.recognize(
    '../assets/'+ photo + '.JPG',
    'eng',
    { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
    console.log(text);
    })
}


function BrandonGraham1_clicked() {
  const url = "/api/eagles_ml/BrandonGraham1"
  d3.json(url).then(function(response) {
    console.log(response)

  });
  // photo = 'BrandonGraham1'
  // GetTessaractOCR(photo);

}

function BrandonGraham_55_skewed_clicked() {
  const url = "/api/eagles_ml/BrandonGraham_55_skewed"
  d3.json(url).then(function(response) {
    console.log(response)

  });
  // photo = 'BrandonGraham_55_skewed'
  // GetTessaractOCR(photo);
}

function MilesSanders_numberClear2_clicked() {
  const url = "/api/eagles_ml/MilesSanders_numberClear2"
  d3.json(url).then(function(response) {
    console.log(response)
  });
  // photo = 'MilesSanders_numberClear2'
  // GetTessaractOCR(photo);
}

function MilesSanders_numberClear_clicked() {
  const url = "/api/eagles_ml/MilesSanders_numberClear"
  d3.json(url).then(function(response) {
    console.log(response)
  });
  // photo = 'MilesSanders_numberClear2'
  // GetTessaractOCR(photo);
}

function MilesSanders_multiPlayers_clicked(){
  const url = "/api/eagles_ml/MilesSanders_multiPlayers"
  d3.json(url).then(function(response) {
    console.log(response)
  });
  // photo = 'MilesSanders_multiPlayers'
  // GetTessaractOCR(photo);
}

function BrianDawkins_helmetOff2_clicked(){
  const url = "/api/eagles_ml/BrianDawkins_helmetOff2"
  d3.json(url).then(function(response) {
    console.log(response)
  });
  // photo = 'MilesSanders_multiPlayers'
  // GetTessaractOCR(photo);
}

function BrianDawkins_helmetOn_clicked(){
  const url = "/api/eagles_ml/BrianDawkins_helmetOn"
  d3.json(url).then(function(response) {
    console.log(response)
  });
  // photo = 'MilesSanders_multiPlayers'
  // GetTessaractOCR(photo);
}