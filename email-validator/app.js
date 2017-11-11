var express = require('express');
var request = require('request');
var app = express();

app.get('/', function(req, res) {
  var domain = req.query.email.split('@').pop();
  request('https://api.mailtest.in/v1/' + domain, function(error, response, body){
    var data = JSON.parse(body);
    res.send({
      [domain]: data
    });
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
