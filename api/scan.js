const express = require("express");

const router = express.Router();
const URLSearchParams = require("url-search-params");

const fetch = require("isomorphic-fetch");

// All routes will be prepended by /api/foods/
router.get("/:upc?", (req, res, next) => {
  var options = { method: "POST", headers: { "Cache-Control": "no-cache", "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" }, body: new URLSearchParams( // body: new URLSearchParams({ login: "BLong", password: "1lvPhish", upc: req.body.upc || req.query.upc || req.params.upc })
      { login: "canieatthat", password: "CanIEatThatpw?!1", upc: req.body.upc || req.query.upc || req.params.upc }
    ) };
  fetch("https://api.foodfacts.com/ci/api/foodfacts/food_find_product_by_upc", options)
    .then(res => res.json())
    .then(data => {
      res.send(data);
    })
    .catch(next);
});

module.exports = router;
