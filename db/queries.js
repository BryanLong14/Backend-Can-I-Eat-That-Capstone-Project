const db = require("./index");

module.exports = {
    getAll() {
        return db("food_to_avoid");
    }
};