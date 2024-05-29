import express from 'express'
import dotenv from 'dotenv'
import ProductRoutes from './routes/ProductRoutes.js'
dotenv.config()
import connectDB from './config/db.js'

connectDB()
const app = express()
const port = process.env.PORT || 5000


app.use('/api/products', ProductRoutes)


app.listen(port, () => {
    console.log(`this app listening on port ${port}`)
})
