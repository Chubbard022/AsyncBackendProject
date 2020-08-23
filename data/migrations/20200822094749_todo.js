
exports.up = function(knex) {
  return knex.schema
    .createTable("list",itm=>{
        itm.increments("id")
        itm.string("name").notNullable()
    })
    .createTable("item",itm=>{
        itm.increments("id")
        itm.string("name")
        itm.boolean("completed")
        itm.integer("list_id")//FK to list table
            .unsigned()
            .references("id")
            .inTable("list")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("item")
    .dropTableIfExists("list")
};
