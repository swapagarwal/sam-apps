var express = require('express');
var request = require('request');
var app = express();

app.get('/', function(req, res) {
  request('https://quotes.rest/qod.json', function(error, response, body){
    var data = JSON.parse(body);
    res.send({
      "quote": data.contents.quotes[0].quote,
      "author": data.contents.quotes[0].author
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
