const express = require("express");

const router = express.Router();

const queries = require("../db/queries");

// All routes will be prepended by /api/foods/
router.get("/", async (req, res) => {
    const foods = await queries.getAll();
    res.json(foods);
});

module.exports = router;