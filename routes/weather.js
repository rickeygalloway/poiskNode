var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('weather', { title: 'Poisk Node - Weather Webservice' }, function(err, html) {
  res.send("Call weather api service...");

  });
});

module.exports = router;
