
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//login validation
const loginMid = async function (req, res, next) {
    let userName = req.body.emailId;
    let password = req.body.password;
  
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "Bsc",
        organisation: "Davcollege",
      },
      "Dav-bsc"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });

    next()
  };
  //get user validation

  const getUserMid = async function (req, res, next) {
    let token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "Dav-bsc");
    if (decodedToken){
      
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
  
    res.send({ status: true, data: userDetails });
    }else{
      res.send({ status: false, msg: "token is invalid" });
  
    }
    next()
  };
  //update user validation

  const updateUserMid = async function (req, res, next) {
    let token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.send("No such user exists");
    }
  
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: updatedUser, data: updatedUser });
    next()
  };

  //Delete user validation
  const DeleteUserMid = async function (req, res, next) {
    let token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.send("No such user exists");
    }
  
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.send({ status: updatedUser, data: updatedUser });
    next()
  };
 
module.exports.getUserMid = getUserMid  
module.exports.DeleteUserMid = DeleteUserMid  
module.exports.updateUserMid = updateUserMid
module.exports.loginMid = loginMid