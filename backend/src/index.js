const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const dbPassword = 'JZPUWhXDHXlVYvGr'
const dbUser = 'allanmenezes880'

const app = express()
const port = 3000
app.use(express.json())
app.use(cors())
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@techstore.jnxr1sz.mongodb.net/?retryWrites=true&w=majority`)

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


app.listen(port, () => {
    console.log('server initialized')
})
