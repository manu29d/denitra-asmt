var express = require('express');
var router = express.Router();

var searchInStores = require('../lib/searchInStores');

/* GET search listing. */
router.get('/', async function(req, res) {
  const keyword = req.query.q;
  const stores = req.app.get('stores');
  const results = { results: await searchInStores(stores, keyword) };
  res.json(results);
});

module.exports = router;
