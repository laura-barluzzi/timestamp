var express = require('express');
var app = express();


function isValidUnix(sec){
  var milSeconds = (sec * 1000);
  var date = new Date(milSeconds);
  return (date != 'Invalid Date') ? true : false; 
}

function getDate(ms) {
  var months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  var date = new Date(ms);
  var naturalDate = months[date.getMonth()] + ", " +
                    date.getDate() + " " + date.getFullYear();
  return naturalDate;
}

function isNaturalDate(param) {
  return false;
}

function getResult(unix, natural) {
  return {"unix": unix,
          "natural": natural};
}

app.get('/:date', function (req, res) {
  var paramDate = req.params.date; //string
  var isNaturalDate = true;
  var result = "";
  
  if (isValidUnix(paramDate)) {
    var ms = parseInt(paramDate*1000);
    var naturalDate = getDate(ms);
    result = getResult(ms, naturalDate);

  } else if (isNaturalDate) {
    //from date to unix
  } else {
    result = getResult(null, null);
  }
  
  res.send(JSON.stringify(result));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});