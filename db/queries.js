const db = require("./index");

module.exports = {
    getAll() {
        return db("food_to_avoid");
    },
    getOne(id) {
        return db("food_to_avoid").where('id', id).first();
    },
    create(food) {
        return db("food_to_avoid").insert(food, 'id').then(ids => {
             return ids[0];
            });
    },
    update(id, food) {
        return db("food_to_avoid").where('id', id).update(food);        
    },
    delete(id){
        return db("food_to_avoid").where('id', id).del();       
    }
};