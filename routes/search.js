var express = require('express');
var router = express.Router();

var searchInStores = require('../lib/searchInStores');

/* GET search listing. */
router.get('/', function(req, res, next) {
  const keyword = req.query.q;
  const stores = req.app.get('stores');
  const results = { results: searchInStores(stores, keyword) };
  res.json(results);
});

module.exports = router;
