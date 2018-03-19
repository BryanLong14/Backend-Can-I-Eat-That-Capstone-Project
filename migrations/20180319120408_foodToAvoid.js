
exports.up = function(knex, Promise) {
    return knex.schema.createTable("food_to_avoid", (table) => {
        table.increments();
        table.text("name").notNullable();
    });
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("food_to_avoid");
};
