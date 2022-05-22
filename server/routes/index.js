var express = require('express');
var router = express.Router();
var db = require('../modules/db');
var cors = require('cors')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/orders/get', cors(), function (req, res, next) {
  db.selectMany('orders')
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
    
})

module.exports = router;
