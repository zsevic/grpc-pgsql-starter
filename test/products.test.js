import request from 'supertest'
import app from '../client/app'

describe('Products', () => {
  it('should return list of products', done => {
    request(app)
      .get('/api/products')
      .expect(200, done)
  })

  it('should return found product', done => {
    request(app)
      .get('/api/products/1')
      .expect(200, done)
  })

  it('should return error when product is not found', done => {
    request(app)
      .get('/api/products/5')
      .expect(404, done)
  })

  it('should create product with provided payload', done => {
    request(app)
      .post('/api/products')
      .send({
        name: 'paper',
        price: '0.99',
      })
      .expect(201, done)
  })

  it('should update product with provided payload', done => {
    request(app)
      .put('/api/products/1')
      .send({
        name: 'pencil',
        price: '1.49',
      })
      .expect(200, done)
  })

  it('should return error when product for updating is not found', done => {
    request(app)
      .put('/api/products/45')
      .send({
        name: 'pencil',
        price: '1.49',
      })
      .expect(404, done)
  })

  it('should delete product with provided id', done => {
    request(app)
      .delete('/api/products/2')
      .expect(200, done)
  })

  it('should return error when product for deleting is not found', done => {
    request(app)
      .delete('/api/products/45')
      .expect(404, done)
  })
})
