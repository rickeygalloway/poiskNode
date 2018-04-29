var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('weather', { title: 'Poisk Node - Weather Webservice' }, function(err, html) {
    
    
    var http = require('http');
    var data = JSON.stringify({
      'id': '2'
    });
    
    var options = {
      host: 'api.openweathermap.org',
      port: '80',
      path: '/data/2.5/weather?q=London',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': data.length
      }
    };
    
    var req = http.request(options, function(res) {
      var msg = '';
    
      res.setEncoding('utf8');
      res.on('data', function(chunk) {
        msg += chunk;
      });
      res.on('end', function() {
        console.log(JSON.parse(msg));
      });
    });
    
    req.write(data);
    req.end();




  });
});

module.exports = router;
