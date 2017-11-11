var express = require('express');
var request = require('request');
var app = express();

app.get('/', function(req, res) {
  request('https://api.fixer.io/latest?base=USD', function(error, response, body){
    var data = JSON.parse(body);
    res.send(data);
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
