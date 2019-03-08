import path from 'path'
import grpc from 'grpc'
import 'dotenv/config'
import {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from './api/product'

const protoLoader = require('@grpc/proto-loader')

const productProtoPath = path.join(
  __dirname,
  '../protos/product.proto',
)
const productProtoDefinition = protoLoader.loadSync(productProtoPath)
const productPackageDefinition = grpc.loadPackageDefinition(
  productProtoDefinition,
).product

const server = new grpc.Server()

server.addService(productPackageDefinition.ProductService.service, {
  listProducts,
  readProduct,
  createProduct,
  updateProduct,
  deleteProduct,
})

server.bind(
  'localhost:50051',
  grpc.ServerCredentials.createInsecure(),
)
server.start()
console.log('gRPC server running at http://localhost:50051')
