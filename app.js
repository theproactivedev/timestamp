var express = require("express");
var dateFormat = require('dateformat');

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.get("/public/timestamp/:dateParams", function(req, res) {
    // res.type('txt').send('Home found');
  var output = {};
  
  var parameter = req.params.dateParams;
  
  if (Number(parameter) && parameter > 0) {
    var reformedDate = new Date(Number(parameter));
    
    output = {
      unix: parameter,
      natural: dateFormat(reformedDate, "longDate")
    };
    
  } else if (parameter.indexOf("%") > -1) {
    var trimmedDate = parameter.replace(/%20/g, " ");
    output = {
      unix: Date.parse(trimmedDate),
      natural: trimmedDate
    };
  }
  
  res.json(output);
  
});






app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
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