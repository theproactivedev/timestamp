 /******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/

'use strict';

var fs = require('fs');
var express = require('express');
var app = express();
var dateFormat = require("dateformat");

if (!process.env.DISABLE_XORIGIN) {
  app.use(function(req, res, next) {
    var allowedOrigins = ['https://narrow-plane.gomix.me', 'https://www.freecodecamp.com'];
    var origin = req.headers.origin || '*';
    if(!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1){
         console.log(origin);
         res.setHeader('Access-Control-Allow-Origin', origin);
         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    }
    next();
  });
}

app.use('/public', express.static(process.cwd() + '/public'));

app.route('/_api/package.json')
  .get(function(req, res, next) {
    console.log('requested');
    fs.readFile(__dirname + '/package.json', function(err, data) {
      if(err) return next(err);
      res.type('txt').send(data.toString());
    });
  });

app.route("/timestamp/:dateParams").get(function(req, res) {
  var output = {};
  
  var parameter = req.params.dateParams;
  
  if (Number(parameter) && parameter > 0) {
    var reformedDate = new Date(Number(parameter));
    
    output = {
      unix: parameter,
      natural: dateFormat(reformedDate, "longDate")
    };
    
  } else if (parameter.indexOf(" ") > -1) {
    // var trimmedDate = parameter.replace(/%20/g, " ");
    
    
    output = {
      unix: Date.parse(req.params.dateParams),
      natural: req.params.dateParams
    };
  } else {
    output = {
      itsnull : req.params.dateParams,
      unix: null,
      natural: null
    };
  }
  
  res.json(output);
    // res.type('txt').send('found');

});
  
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })

// Respond not found to all the wrong routes
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});

// Error Middleware
app.use(function(err, req, res, next) {
  if(err) {
    res.status(err.status || 500)
      .type('txt')
      .send(err.message || 'SERVER ERROR');
  }  
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

