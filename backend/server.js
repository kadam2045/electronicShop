import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import products from './data/products.js'
import connectDB from './config/db.js'


connectDB()
const app = express()
const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("hello server")
})

app.get("/api/products", (req, res) => {
    res.json(products)
})

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.listen(port, () => {
    console.log(`this app listening on port ${port}`)
})
