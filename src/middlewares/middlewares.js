const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const route = require("../routes/route")

const miduser = function(req, res, next){
if(req.body.isFreeAppUser == true){
    res.send({msg :"request is missing a mandatory header"})
 }
 next()

}

const midProduct = function(req, res, next){
    
    if(req.body.isFreeAppUser == true){
        
    }
    next()
}
const midorder = function(req, res, next){
    let data = req.body.amount
    if(req.body.isFreeAppUser == true){
        orderModel.updateMany(
            {"amount" : 70},
            {$set : {"amount" : 0}})
            res.send({msg : "amount updated to 0"})
    }else if (req.body.isFreeAppUser == false) {
        orderModel.userModel.updateMany(
            {"price" : 70},
            {$set : {"price" : data }})
            res.send({msg : "price updated as balance"})
    }
    next()
}

module.exports.midProduct = midProduct
module.exports.midorder = midorder
module.exports.miduser = miduser