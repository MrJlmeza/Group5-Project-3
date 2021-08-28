
// function buildSummarizedData() {
//   const url = "/api/summarized";
//   d3.json(url).then(function(response) {
//     // console.log(response);
//     var totalEarningsDiv = document.getElementById('totalEarningsDiv');
//     totalEarningsDiv.innerHTML += response.totalEarnings;

//     var totalDeliveriesDiv = document.getElementById('totalDeliveriesDiv');
//     totalDeliveriesDiv.innerHTML += response.totalDeliveries;

//     var totalEstablishmentsDiv = document.getElementById('totalEstablishmentsDiv');
//     totalEstablishmentsDiv.innerHTML += response.totalEstablishments;

//     var totalTipsDiv = document.getElementById('totalTipsDiv');
//     totalTipsDiv.innerHTML += response.totalTips;
//     // console.log( response.typeCount);

//     var valueList = [];
//     var labelsList = [];
//     Object.keys(response.typeCount).forEach(function(key) {
//       valueList.push(response.typeCount[key]);
//       labelsList.push(key);
//     });

//     var trace1 = {
//       labels: labelsList,
//       values: valueList,
//       type: 'pie'
//     };

//     var data = [trace1];

//     // var layout = {
//     //   title: "'Bar' Chart",
//     // };

//     Plotly.newPlot("pieChart", data, {responsive: true});

//   });

// }

// function buildBarChart() {
//   const url = "/api/bar";
//   d3.json(url).then(function(response) {
//     // console.log(response);
//     var establishmentList = [];
//     var totalList = [];
//     // console.log(response);
//     for (var i = 0; i < 5; i++) {
//       establishmentList.push(response[i]["establishment"]);
//       totalList.push(response[i]["total"]);
//     }
//     var trace1 = {
//       x: establishmentList,
//       y: totalList,
//       type: 'bar',
//       marker: {
//         color: 'rgb(142,124,195)'
//       }
//     };
    
//     var data = [trace1];
    
//     var layout = {
//       // title: 'Number of Graphs Made this Week',
//       font:{
//         family: 'Raleway, sans-serif'
//       },
//       showlegend: false,
//       xaxis: {
//         tickangle: -45,
//         title: {
//           text: 'Establishment',
//           font: {
//             size: 14,
//           }
//         }
//       },
//       yaxis: {
//         zeroline: false,
//         gridwidth: 2,
//         title: {
//           text: 'Total Earnings (in U.S. Dollars)',
//           font: {
//             size: 14,
//           }
//         }
//       },
//       bargap :0.05
//     };
    
//     Plotly.newPlot('establishmentsEarningsBar', data, layout, {responsive: true});

//   })

// }

// function buildMap() {
//   var myMap = L.map("EstablishmentsMapDiv", {
//     center: [39.96366, -75.59671],
//     zoom: 11
//   });

//   // Adding tile layer to the map
//   L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     // id: "mapbox/streets-v11",
//     // accessToken: API_KEY
//   }).addTo(myMap);

//   // Assemble API query URL
//   var url = "/api/establishmentmap";

//   // Grab the data with d3
//   d3.json(url).then(function(response) {
//     console.log(response);

//     // Loop through data
//     for (var i = 0; i < response.length; i++) {
//       // L.circleMarker([response[i]["lat"], response[i]["long"]], {
//       //   fillOpacity: 0.75,
//       //   color: "white",
//       //   fillColor: "purple",
//       //   // Setting our circle's radius equal to the output of our markerSize function
//       //   // This will make our marker's size proportionate to its population
//       //   radius: 5
//       // }).bindPopup("<h1>" + response[i]["establishment"] + "</h1>").addTo(myMap);

//       // markers.addLayer(L.marker([response[i]["lat"], response[i]["long"]])
//       // .bindPopup(response[i]["establishment"]));
//       var marker = L.marker([response[i].lat, row.long], {
//         opacity: 1
//       }).bindPopup(response[i].establishment);
//     }

//     // Add our marker cluster layer to the map
//     // myMap.addLayer(markers);
    
//     marker.addTo(map);
    
//   });
// }

// function buildDashboards() {
  
//   buildSummarizedData();
//   buildBarChart();
//   //buildMap();
  
      
// }

// @app.route("/api/v1.0/justice-league/real_name/<real_name>")
// def justice_league_by_real_name(real_name):

function BrandonGraham1Clicked() {
  // const url = "/api/eagles_ml/BrandonGraham1"
  // d3.json(url).then(function(response) {
  //   console.log(response)

  // });

  Tesseract.recognize(
    'http://127.0.0.1:5000/static/assets/BrandonGraham1.JPG',
    'eng',
    { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
    console.log(text);
  })


}