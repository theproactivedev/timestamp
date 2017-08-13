var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/timestamp/:dateParams", function(req, res) {
    res.type('txt').send('Home found');
  
  
  var 
});






app.listen(3000, function(error) {
  if (error) throw error;
  
  console.log("Working");
});
