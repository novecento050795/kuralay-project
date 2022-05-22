var express = require('express');
var router = express.Router();
var db = require('../modules/db');
var cors = require('cors')

router.use(cors())

router.get('/orders/get', function (req, res, next) {
  db.selectMany('orders')
    .then(orders => res.json(orders))
    .catch(err => res.json(err)) 
})

router.put('/orders/update', function(req, res, next) {
  db.update('orders', {
    status: req.body.status
  }, `WHERE id = ${req.body.order_id}`)
    .then(orders => res.json(orders))
    .catch(err => res.json(err)) 
})

router.get('/clients/get', function(req, res, next) {
  db.selectMany('clients')
    .then(clients => res.json(clients))
    .catch(err => res.json(err))
})

router.get('/products/get', function(req, res, next) {
  db.selectMany('products')
    .then(products => res.json(products))
    .catch(err => res.json())
})

module.exports = router;
