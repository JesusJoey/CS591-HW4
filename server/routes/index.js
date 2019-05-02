var express = require('express');
var router = express.Router();

/* Retrieve weather data from external API. */

//var url = 'http://www.apixu.com/doc/Apixu_weather_conditions.json';

function func(body,code) {
  var cityweather = body.filter((obj)=> obj['code'] == code)
  console.log(cityweather);
  return cityweather;
}

router.get('/:zipcode',function(req,res) { //matches http://localhost:3000/api/12345
  const options = {
    method: 'GET',
    url: 'http://www.apixu.com/doc/Apixu_weather_conditions.json',
  };

  request(options, function (error,response,body) {
    if (error) throw new Error(error);
    const data = JSON.parse(body);
    const weather = func(data,zipcode);
    res.send(weather);
  });
});


module.exports = router;
