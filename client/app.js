import express from 'express'
import bodyParser from 'body-parser'
import productRoutes from './routes/productRoutes'

const PORT = process.env.PORT || 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', productRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

export default app
