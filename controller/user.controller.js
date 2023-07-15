const { reset } = require("nodemon");
const userServ = require("../services/user.service");
const util = require("../utils/util")
require("dotenv").config();
module.exports = {
    signUp : async function(req, res){
        let profileImg = process.env.API_BASE_URL+req.file.path
        let userDetails = {
            profileImg : profileImg,
            fullName: req.body.fullName,
            phoneNumber: req.body.phoneNumber,
            password:req.body.password,
            role: req.body.role,
            email: req.body.email
        }
        let result = await userServ.signUp(userDetails);
        util.sendResponse(result, req, res);
    },
    login : async function(req, res){
        let result = await userServ.login(req.body);
        util.sendResponse(result, req, res);
    },
    getUserList : async function(req, res){
        let result = await userServ.getUserList(req.body);
        util.sendResponse(result, req, res);
    },
}