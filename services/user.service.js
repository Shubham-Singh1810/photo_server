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
      }
      else{
        await new User(body).save();
        result.message ="User registered successfully"
      }
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  login: async function (body) {
    let result = {};
    try {
     let logedUser = await User.findOne(body).select("-password");
      if (logedUser) {
        console.log(logedUser)
        result.data = logedUser;
        result.token = await jwt.sign( {logedUser} , process.env.JWT_KEY);
        result.message = "You are logged in successfully";
      } else {
        result.message = "Invalid login details";
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
      result.message = "Users List data retrived successfully"
    } catch (error) {
      result.err = error
    }
    return result
  },
  getUser: async function(id){
    let result ={};
    try {
      result.data=  await User.findOne({_id: id})
      result.message = "User data retrived successfully"
    } catch (error) {
      result.err = error
    }
    return result
  },
  update: async function(body){
    console.log(body)
    let result ={};
    try {
      result.data = await User.findByIdAndUpdate(body._id, { $set: body }, { new: true }).select("-password");
      result.message = "User updated  successfully"
    } catch (error) {
      result.err = error
    }
    return result
  },
  isMobileExist: async function(body){
    let result ={};
    try {
      let user;
      user = await User.findOne({phoneNumber: body.phoneNumber});
      if(user){
         result.message = "Mobile no. already exist"
      }
      else{
        result.message =  "Mobile no. is unique"
      }
    } catch (error) {
      result.err = error
    }
    return result
  }
};
