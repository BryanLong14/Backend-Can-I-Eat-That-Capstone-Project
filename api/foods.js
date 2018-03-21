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

router.post("/", (req, res, next) => {
    queries
      .create(req.body) 
      .then(id => {
        res.status(201).json(id);
      })
      .catch(next);
});

router.put("/:id", (req, res, next) => {
    queries
      .update(req.params.id, food)
      .then(() => {
        res.json({ message: "Updated food :)" });
      })
      .catch(next);
});

router.delete("/:id", (req, res, next) => {
    queries
      .delete(req.params.id)
      .then(() => {
        res.json({ message: "Deleted Food :)" });
      })
      .catch(next);
});

module.exports = router;