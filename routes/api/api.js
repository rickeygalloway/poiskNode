var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('api/api', { title: 'Poisk Node - API' }, function(err, html) {
  
    res.setHeader("Content-Type", 'application/json');
    var response = performRequest();

   res.send(response);
  });
});

function performRequest() {
  //more samples here - https://jsonplaceholder.typicode.com/
  var request = require('sync-request');
  var response = request("Get", "https://jsonplaceholder.typicode.com/posts", {});
  return response.body;
}

module.exports = router;
