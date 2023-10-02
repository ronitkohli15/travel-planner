var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.send('welcome to calling from product..');
});

module.exports = router;