function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

function appendData(data, divName, playerFlag) {
  var mainContainer = document.getElementById(divName);
  mainContainer.innerHTML = "";
  if (data == 'undefined' || isEmpty(data)) {
    var div = document.createElement("div"); 
    div.innerHTML = 'Not Found';
    mainContainer.appendChild(div);
  }
  else {
    if (playerFlag) {
      console.log(data.length);
      for (var i = 0; i < data.length; i++) { 
        var div = document.createElement("div");
        div.innerHTML = "Player Name: " + data[i]["playername"] + ', Jersey: ' + data[i]["playernumber"];
        mainContainer.appendChild(div);
      }
    }
    else {
      for ([key, val] of Object.entries(data)) {       
        var div = document.createElement("div"); 
        div.innerHTML = key + ' @ ' + val.toFixed(2) + '%';
        mainContainer.appendChild(div);
      }
    }
  }
}

function TestImages1_clicked() {
  const url = "/api/eagles_ml/TestImages1"
  d3.json(url).then(function(response) {
    console.log(response);
    appendData(response[0], "textData1Div", false); 
    appendData(response[1], "celebData1Div", false)
    appendData(response[2], "playerData1Div", true)
  });
}

function TestImages2_clicked() {
  const url = "/api/eagles_ml/TestImages2"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData2Div", false); 
    appendData(response[1], "celebData2Div", false)
    appendData(response[2], "playerData2Div", true)
  });
}

function TestImages3_clicked() {
  const url = "/api/eagles_ml/TestImages3"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData3Div", false); 
    appendData(response[1], "celebData3Div", false)
    appendData(response[2], "playerData3Div", true)
  });
}

function TestImages4_clicked() {
  const url = "/api/eagles_ml/TestImages4"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData4Div", false); 
    appendData(response[1], "celebData4Div", false)
    appendData(response[2], "playerData4Div", true)
  });
}

function TestImages5_clicked() {
  const url = "/api/eagles_ml/TestImages5"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData5Div", false); 
    appendData(response[1], "celebData5Div", false)
    appendData(response[2], "playerData5Div", true)
  });
}

function TestImages6_clicked() {
  const url = "/api/eagles_ml/TestImages6"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData6Div", false); 
    appendData(response[1], "celebData6Div", false)
    appendData(response[2], "playerData6Div", true)
  });
}

function TestImages7_clicked() {
  const url = "/api/eagles_ml/TestImages7"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData7Div", false); 
    appendData(response[1], "celebData7Div", false)
    appendData(response[2], "playerData7Div", true)
  });
}

function TestImages8_clicked() {
  const url = "/api/eagles_ml/TestImages8"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData8Div", false); 
    appendData(response[1], "celebData8Div", false)
    appendData(response[2], "playerData8Div", true)
  });
}

function TestImages9_clicked() {
  const url = "/api/eagles_ml/TestImages9"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData9Div", false); 
    appendData(response[1], "celebData9Div", false)
    appendData(response[2], "playerData9Div", true)
  });
}

function TestImages10_clicked() {
  const url = "/api/eagles_ml/TestImages10"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData10Div", false); 
    appendData(response[1], "celebData10Div", false)
    appendData(response[2], "playerData10Div", true)
  });
}

function TestImages11_clicked() {
  const url = "/api/eagles_ml/TestImages11"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData11Div", false); 
    appendData(response[1], "celebData11Div", false)
    appendData(response[2], "playerData11Div", true)
  });
}

function TestImages12_clicked() {
  const url = "/api/eagles_ml/TestImages12"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData12Div", false); 
    appendData(response[1], "celebData12Div", false)
    appendData(response[2], "playerData12Div", true)
  });
}

function TestImages13_clicked() {
  const url = "/api/eagles_ml/TestImages13"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData13Div", false); 
    appendData(response[1], "celebData13Div", false)
    appendData(response[2], "playerData13Div", true)
  });
}

function TestImages14_clicked() {
  const url = "/api/eagles_ml/TestImages14"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData14Div", false); 
    appendData(response[1], "celebData14Div", false)
    appendData(response[2], "playerData14Div", true)
  });
}

function TestImages15_clicked() {
  const url = "/api/eagles_ml/TestImages15"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "textData15Div", false); 
    appendData(response[1], "celebData15Div", false)
    appendData(response[2], "playerData15Div", true)
  });
}

function Celebs1_clicked() {
  const url = "/api/eagles_ml/Celebs1"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "celebData1Div", false); 
  });
}

function Celebs2_clicked() {
  const url = "/api/eagles_ml/Celebs2"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "celebData2Div", false); 
  });
}

function Celebs3_clicked() {
  const url = "/api/eagles_ml/Celebs3"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "celebData3Div", false); 
  });
}

function Celebs4_clicked() {
  const url = "/api/eagles_ml/Celebs4"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "celebData4Div", false); 
  });
}

function Celebs5_clicked() {
  const url = "/api/eagles_ml/Celebs5"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "celebData5Div", false); 
  });
}

function Celebs6_clicked() {
  const url = "/api/eagles_ml/Celebs6"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "celebData6Div", false); 
  });
}

function Celebs7_clicked() {
  const url = "/api/eagles_ml/Celebs7"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "celebData7Div", false); 
  });
}

function Celebs8_clicked() {
  const url = "/api/eagles_ml/Celebs8"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "celebData8Div", false); 
  });
}

function Celebs9_clicked() {
  const url = "/api/eagles_ml/Celebs9"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "celebData9Div", false); 
  });
}

function Celebs10_clicked() {
  const url = "/api/eagles_ml/Celebs10"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "celebData10Div", false); 
  });
}

function Celebs11_clicked() {
  const url = "/api/eagles_ml/Celebs11"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "celebData11Div", false); 
  });
}

function Celebs12_clicked() {
  const url = "/api/eagles_ml/Celebs12"
  d3.json(url).then(function(response) {
    console.log(response)
    appendData(response[0], "celebData12Div", false); 
  });
}
