const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = 3000
app.use(express.json())
app.use(cors())


const Product = mongoose.model('Product', {
    price: String,
    descont: String,
    image: String
})

app.post('/', async (req, res) => {
    const product = new Product({
        price: req.body.price,
        descont: req.body.descont,
        image: req.body.image
    })

    await product.save()
    res.send(product)
})

app.get('/', async (req, res) => {
    const products = await Product.find()
    res.send(products)
})

app.get('/product/:id', async (req, res) => {
    const id = req.params.id
    const products = await Product.findById(id)
    res.send(products)
})


app.listen(port, () => {
    
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@techstore.jnxr1sz.mongodb.net/?retryWrites=true&w=majority`)
    
    console.log('server initialized')
})
