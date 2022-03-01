const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//const express = require('express');
//const router = express.Router();
//const BookController = require("../controller/bookcontroller.js")
router.post('/createBook', BookController.createBook);
router.get('/bookList', BookController.bookList);
router.post('/getBooksInYear', BookController.getBooksInYear)
router.get ('/getParticularBooks', BookController.getParticularBooks);

module.exports = router;