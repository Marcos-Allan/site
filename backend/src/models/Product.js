const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    price: String,
    descont: String,
    image: String
})

module.exports =  Product