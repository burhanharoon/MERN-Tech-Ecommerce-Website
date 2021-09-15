const express = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
    res.send("Api is running dude damn")
})

app.get('/api/products', (req, res) => {
    res.send(products);
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log("Server runnning or port 5000"))