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

  //Error here... fix
  var request = require('sync-request');
  
  var response = request("Post", "https://jsonplaceholder.typicode.com/posts", {});
    
  response.getBody('utf8');

}

module.exports = router;
