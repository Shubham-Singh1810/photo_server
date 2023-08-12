const { reset } = require("nodemon");
const userServ = require("../services/user.service");
const util = require("../utils/util");
const cloudinary = require("../utils/cloudinary");
require("dotenv").config();
module.exports = {
  signUp: async function (req, res) {
    console.log(req.file)
    let profileImg = await cloudinary.uploader.upload(req.file.path, function (err, result) {
      if (err) {
        return err;
      } else {
        return result.data;
      }
    });
    let result = await userServ.signUp({...req.body, profileImg:profileImg.url });
    util.sendResponse(result, req, res);
  },
  login: async function (req, res) {
    let result = await userServ.login(req.body);
    util.sendResponse(result, req, res);
  },
  getUserList: async function (req, res) {
    let result = await userServ.getUserList(req.body);
    util.sendResponse(result, req, res);
  },
  getUser: async function (req, res) {
    let result = await userServ.getUser(req.params.id);
    util.sendResponse(result, req, res);
  },
  update: async function (req, res) {
    let result = await userServ.update(req.body);
    util.sendResponse(result, req, res);
  },
  updateUser: async function (req, res) {
    let userDetails;
    if (req.file) {
      let profileImg = await cloudinary.uploader.upload(req.file.path, function (err, result) {
        if (err) {
          return err;
        } else {
          return result.data;
        }
      });
      userDetails = {
        profileImg: profileImg.url,
        fullName: req.body.fullName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        _id: req.body._id,
      };
    } else {
      userDetails = req.body;
    }
    let result = await userServ.update(userDetails);
    util.sendResponse(result, req, res);
  },
  isMobileExist: async function (req, res) {
    let result = await userServ.isMobileExist(req.body);
    util.sendResponse(result, req, res);
  },
};
