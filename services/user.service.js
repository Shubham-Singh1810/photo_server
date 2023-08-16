const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  signUp: async function (body) {
    let result = {};
    try {
      let user = await User.findOne({phoneNumber: body.phoneNumber})
      if(user){
        result.message ="Phone number is already registered"
        result.status = false;
      }
      else{
        await new User(body).save();
        result.message ="User registered successfully"
        result.status = true;
      }
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result;
  },
  login: async function (body) {
    let result = {};
    try {
     let logedUser = await User.findOne(body).select("-password");
      if (logedUser) {
        result.data = logedUser;
        result.token = await jwt.sign( {logedUser} , process.env.J_K);
        result.message = "You are logged in successfully";
        result.status = true;
      } else {
        result.message = "Invalid login details";
        result.status = false;
      }
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  getUserList: async function(body){
    let result ={};
    try {
      result.data = await User.find({});
      result.message = "Users List data retrived successfully";
      result.status = true;
    } catch (error) {
      result.err = error
      result.status = false;
    }
    return result
  },
  getUser: async function(id){
    let result ={};
    try {
      result.data=  await User.findOne({_id: id})
      result.message = "User data retrived successfully";
      result.status = true;
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result
  },
  update: async function(body){
    let result ={};
    try {
      result.data = await User.findByIdAndUpdate(body._id, { $set: body }, { new: true }).select("-password");
      result.message = "User updated  successfully";
      result.status = true;
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result
  },
  isMobileExist: async function(body){
    let result ={};
    try {
      let user;
      user = await User.findOne({phoneNumber: body.phoneNumber});
      if(user){
         result.message = "Mobile no. already exist";
         result.status = false;
      }
      else{
        result.message =  "Mobile no. is unique"
        result.status = true;
      }
    } catch (error) {
      result.err = error
      result.status = true;
    }
    return result
  }
};
