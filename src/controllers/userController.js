
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

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


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.DeleteUser = DeleteUser;
module.exports.postMessage = postMessage

