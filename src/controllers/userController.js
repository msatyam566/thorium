const { request } = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
    let data = req.body
    console.log(data)
    if (Object.keys(data).length!=0){
      let savedData = await userModel.create(data)
      res.status(201).send({msg:savedData})
    }
    else res.status(400).send({msg:"Bad request"})

  }
    catch (err) {
      console.log("This is the error :", err.message)
      res.status(500).send({ msg: "Error", error:err.message})
    }
 
};
/*const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};*/

const loginUser = async function (res) {
  console.log("all validation of logindata are added to middleware")
};

const getUserData = async function (res) {
  console.log("all validation of getuserdata are added to middleware")
};

const updateUser = async function (res) {
  console.log("all validation of updateuser are added to middleware")
};

const DeleteUser = async function (res) {
  console.log("all validation of Deleteuser are added to middleware")
};
const postMessage = async function (res){
  console.log("all validation of postMessage are added to middleware")
}


//Day 3 try and catch codes Notes //

// TRY CATCH SUMMARY:
// if you get an error in try block, it will not execute the next lines of code inside try
// instead it will jump into catch block and execute the code there
// code in catch block is normallly not executed
//rather catch block is only executed if there is error in try block
// the error( along with message++) gets sent to catch block incase there is an error




// Specific HTTP codes(only impt ones)
// 2xx- Success
// 4xx- something gone wrong..and problem is on user side(client side)
// 5xx- server side problems

// "BAD REQUEST" ...400..say if username password dont match etc..or anything generic( any problem in input on user side or any other unhandled problem)
// "RESOURCE NOT FOUND"...404 //404 page not found...eg. find ("asaijndianud89")...let book =bookModel.findOne({_id:"asaijndianud89"})   if (book){..} else res.status(404).send({})
// "AUTHENTICATION MISSING"...401..login is required...if(token){...} else { res.status(401)}
// "NOT AUTHENTICATED OR FORBIDDEN"..403 // if ( token.userId === userId) {...} else {res.status(403).send({}) }
// -- try catch ....// "SERVER ERROR"...500

// -- ALL GOOD... //status(200)- OK
// --- "ALL GOOD and A NEW RESOURCE WAS SUCCEFULLY CREATED" ...status(201)..e.g a new user registers herself successfully





module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.DeleteUser = DeleteUser;
module.exports.postMessage = postMessage

