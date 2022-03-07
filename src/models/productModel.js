const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    id : String,
    name: String, 
    category: String, 
    price: Number,
    
}, {timestamps:true});

module.exports = mongoose.model('product', productSchema)

