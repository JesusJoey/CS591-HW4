var express = require('express');
var router = express.Router();

/* Retrieve weather data from external API. */

var url = 'http://www.apixu.com/doc/Apixu_weather_conditions.json';

function func(body,code) {
  var cityweather = array.filter((obj)=> obj['code'] == code)
  res.send(cityweather);
  console.log(cityweather);
}

router.get('/',function(req,res) {
  const options = {
    method: 'GET',
    url: 'http://www.apixu.com/doc/Apixu_weather_conditions.json',
  };

  request(options, function (error,response,body) {
    if (error) throw new Error(error);
    const data = JSON.parse(body);
    func(data,1000);
  });
});


module.exports = router;
