exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('price').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products')
}
