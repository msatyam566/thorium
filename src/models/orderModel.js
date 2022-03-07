const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    Id: String, 
    userid: String, 
    productId: String,
    amount : Number,
    isFreeAppUser:  Boolean,
    date : String

}, {timestamps:true});

module.exports = mongoose.model('order', orderSchema)