const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )
router.post("/login", middleware.loginMid, userController.loginUser)

//The userId is sent by front end

router.get("/users/:userId", middleware.getUserMid, userController.getUserData)
router.put("/users/:userId", middleware.updateUserMid, userController.updateUser)
router.put("/users/:userId", middleware.DeleteUserMid, userController.DeleteUser)
router.post("/users/:userId/posts", middleware.postMessageMid,userController.postMessage)



module.exports = router;