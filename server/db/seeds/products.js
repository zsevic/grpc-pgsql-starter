exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('products').insert([
        { id: 1, name: 'pencil', price: '1.99' },
        { id: 2, name: 'pen', price: '2.99' },
      ])
    })
}
