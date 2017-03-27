var express = require('express');
var app = express();

app.get('/:date', function (req, res) {
  var paramDate = req.params.date; //string
  
  var result = {  "unix": null,
                  "natural": null  }
               
  res.send(JSON.stringify(result));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});