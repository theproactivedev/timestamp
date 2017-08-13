var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/timestamp/:dateParams", function(req, res) {
    // res.type('txt').send('Home found');
  
  
  var parameter = req.params.dateParams;
  
  if (parameter
  
  
});






app.listen(3000, function(error) {
  if (error) throw error;
  
  console.log("Working");
});


// var http = require("http");
// var url = require("url");

// var server = http.createServer(function(request, response) {
  
//   var result = url.parse(request.url, true);
//   var date = new Date(result.query.iso);
  
//   if (result.pathname === "/api/parsetime") {
//       var timeObj = {
//         "hour" : date.getHours(),
//         "minute" : date.getMinutes(),
//         "second" : date.getSeconds()
//       };
//   } else if (result.pathname === "/api/unixtime") {
//     var timeObj = {
//       "unixtime" : date.getTime()
//     };
//   }
  
//   if (timeObj) {
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end(JSON.stringify(timeObj));
//   }
   

// });

// server.listen(Number(process.argv[2]));