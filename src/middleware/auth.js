
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//login validation
const loginMid = async function (req, res, next) {
  try{
    let data = req.body
    console.log(data)
    if (Object.keys(data).length!=0){
      let userName = req.body.emailId;
    let password = req.body.password;
     let user = await userModel.findOne({emailId:userName, password: password});
     if (!user) return res.status(400).send({msg:"Email id and password not matched"})
    }
  }
     catch (err) {
      console.log("This is the error :", err.message)
      res.status(500).send({ msg: "Error", error:err.message})
    }
 
};

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
  
  //get user 

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
  //update user

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

  //Delete user
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

  // Day 2 //

  const postMessageMid = async function (req, res) {
    let message = req.body.message
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'Dav-bsc')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
}

 
module.exports.getUserMid = getUserMid  
module.exports.DeleteUserMid = DeleteUserMid  
module.exports.updateUserMid = updateUserMid
module.exports.loginMid = loginMid
module.exports.postMessageMid = postMessageMid