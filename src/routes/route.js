const express = require('express');
const router = express.Router();


//const BookController= require("../controllers/bookController")
const UserController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")
const middleWM = require("../middlewares/middlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser",middleWM.miduser, UserController.createUser  )

router.post("/createProduct", productController.createProduct)
router.post("../createOrder",middleWM.miduser, orderController.createOrder )



//MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})

module.exports = router;