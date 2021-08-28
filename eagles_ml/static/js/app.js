
function BrandonGraham1Clicked() {
  const url = "/api/eagles_ml/BrandonGraham1"
  d3.json(url).then(function(response) {
    console.log(response)

  });

  // Tesseract.recognize(
  //   'http://127.0.0.1:5000/static/assets/BrandonGraham1.JPG',
  //   'eng',
  //   { logger: m => console.log(m) }
  //     ).then(({ data: { text } }) => {
  //   console.log(text);
  //   })


}

function BrandonGraham_55_skewedClicked() {
  const url = "/api/eagles_ml/BrandonGraham_55_skewed"
  d3.json(url).then(function(response) {
    console.log(response)

  });
}

function MilesSanders_numberClear2Clicked() {
  const url = "/api/eagles_ml/MilesSanders_numberClear2"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function MilesSanders_multiPlayersClicked(){
  const url = "/api/eagles_ml/MilesSanders_multiPlayers"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}
