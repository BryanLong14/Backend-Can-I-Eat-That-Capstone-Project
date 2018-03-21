const express = require("express");

const router = express.Router();

const queries = require("../db/queries");

// All routes will be prepended by /api/foods/
router.get('/', (req, res, next) => {
  queries
    .getAll()
    .then(foods => {
      res.json(foods);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
    queries
    .getOne(req.params.id)
    .then(foods => {
        foods ? res.json(foods) : response.sendStatus(404);
    })
    .catch(next);
});

module.exports = router;