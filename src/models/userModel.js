const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    id: String,
    name: String,
    balance: Number,
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },
    isFreeAppUser:  {type: Boolean,
    default: false},
})

module.exports = mongoose.model('User', userSchema) 