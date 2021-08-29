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

function TestImages1_clicked() {
  const url = "/api/eagles_ml/TestImages1"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages2_clicked() {
  const url = "/api/eagles_ml/TestImages2"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages3_clicked() {
  const url = "/api/eagles_ml/TestImages3"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages4_clicked() {
  const url = "/api/eagles_ml/TestImages4"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages5_clicked() {
  const url = "/api/eagles_ml/TestImages5"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages6_clicked() {
  const url = "/api/eagles_ml/TestImages6"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages7_clicked() {
  const url = "/api/eagles_ml/TestImages7"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages8_clicked() {
  const url = "/api/eagles_ml/TestImages8"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages9_clicked() {
  const url = "/api/eagles_ml/TestImages9"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages10_clicked() {
  const url = "/api/eagles_ml/TestImages10"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages11_clicked() {
  const url = "/api/eagles_ml/TestImages11"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages12_clicked() {
  const url = "/api/eagles_ml/TestImages12"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages13_clicked() {
  const url = "/api/eagles_ml/TestImages13"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages14_clicked() {
  const url = "/api/eagles_ml/TestImages14"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

function TestImages15_clicked() {
  const url = "/api/eagles_ml/TestImages15"
  d3.json(url).then(function(response) {
    console.log(response)
  });
}

