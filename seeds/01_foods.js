
exports.seed = async function(knex, Promise) {
  await knex('food_to_avoid').del();
  await knex('food_to_avoid').insert([
        {"id": 1, "name": "eggplant"},
        {"id": 2, "name": "peanuts"},
        {"id": 3, "name": "tomato"}
      ]);
};
