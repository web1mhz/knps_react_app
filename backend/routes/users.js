var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  

  // res.send('respond with a resource');
  res.json(
    [
      { id:1, username:"test body"},
      { id:2, username:"익스프레스"},
      { id:3, username:"node js"},
      { id:4, username:"리액트"},
    ]
  );
});

module.exports = router;
