const productModel = require("../models/productModel")

const createProduct = async function (req,res){
    let product = req.body
    let productCreated = await productModel.create(data)
    res.send({msg:savedData})
}

module.exports.createProduct= createProduct
