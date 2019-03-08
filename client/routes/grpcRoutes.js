import path from 'path'
import grpc from 'grpc'

const protoLoader = require('@grpc/proto-loader')
const productProtoPath = path.join(
  __dirname,
  '../../protos/product.proto',
)
const productProtoDefinition = protoLoader.loadSync(productProtoPath)
const productPackageDefinition = grpc.loadPackageDefinition(
  productProtoDefinition,
).product
const client = new productPackageDefinition.ProductService(
  'localhost:50051',
  grpc.credentials.createInsecure(),
)

export const listProducts = (req, res) => {
  client.listProducts({}, (err, result) => {
    if (err) {
      res.send('There are no products')
    } else {
      res.json(result)
    }
  })
}

export const readProduct = (req, res) => {
  const payload = { id: parseInt(req.params.id) }

  client.readProduct(payload, (err, result) => {
    if (err) {
      res.status(404).send('That product does not exist')
    } else {
      res.json(result)
    }
  })
}

export const createProduct = (req, res) => {
  const payload = {
    name: req.body.name,
    price: req.body.price,
  }

  client.createProduct(payload, (err, result) => {
    if (err) {
      res.send('Provide valid payload')
    } else {
      res.status(201).json(result)
    }
  })
}

export const updateProduct = (req, res) => {
  const payload = {
    id: parseInt(req.params.id),
    name: req.body.name,
    price: req.body.price,
  }

  client.updateProduct(payload, (err, result) => {
    if (err) {
      res.status(404).send('That product does not exist')
    } else {
      res.json(result)
    }
  })
}

export const deleteProduct = (req, res) => {
  const payload = { id: parseInt(req.params.id) }

  client.deleteProduct(payload, (err, result) => {
    if (err) {
      res.status(404).send('That product does not exist')
    } else {
      res.json(result)
    }
  })
}
