import express from 'express'
import * as grpcRoutes from './grpcRoutes'

const router = express.Router()

router.get('/products', grpcRoutes.listProducts)
router.get('/products/:id', grpcRoutes.readProduct)
router.post('/products', grpcRoutes.createProduct)
router.put('/products/:id', grpcRoutes.updateProduct)
router.delete('/products/:id', grpcRoutes.deleteProduct)

export default router
