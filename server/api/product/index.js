const environment = process.env.NODE_ENV || 'development'
const config = require('../../../knexfile')[environment]
const knex = require('knex')(config)

export const listProducts = (call, callback) => {
  knex('products').then(data => {
    callback(null, { products: data })
  })
}

export const readProduct = (call, callback) => {
  knex('products')
    .where({ id: parseInt(call.request.id) })
    .then(data => {
      if (data.length) {
        callback(null, data[0])
      } else {
        callback('That product does not exist')
      }
    })
}

export const createProduct = (call, callback) => {
  knex('products')
    .insert({
      name: call.request.name,
      price: call.request.price,
    })
    .then(() => {
      callback(null, { status: 'success' })
    })
}

export const updateProduct = (call, callback) => {
  knex('products')
    .where({ id: parseInt(call.request.id) })
    .update({
      name: call.request.name,
      price: call.request.price,
    })
    .returning()
    .then(data => {
      if (data) {
        callback(null, { status: 'success' })
      } else {
        callback('That product does not exist')
      }
    })
}

export const deleteProduct = (call, callback) => {
  knex('products')
    .where({ id: parseInt(call.request.id) })
    .delete()
    .returning()
    .then(data => {
      if (data) {
        callback(null, { status: 'success' })
      } else {
        callback('That product does not exist')
      }
    })
}
