const orderModel = require("../models/orderModel")

const createOrder= async function (req, res,next) {
    let data= req.body
    let savedData= await BookModel.create(data)
    if(req.body.productID == "622623efa13c5544abbf994a" || req.body.userID == "622623d4a13c5544abbf9948" ){
        res.send({msg : "productID and userID are already exist"})
        next()
    }
    res.send({msg: savedData})
}

module.exports.createOrder = createOrder