const postServ = require("../services/post.service");
const util = require("../utils/util");
require("dotenv").config();
const cloudinary = require("../utils/cloudinary");
module.exports = {
  create: async function (req, res) {
    let postArr = [];
    for (let i = 0; i < req.files.length; i++) {
      postArr[i] = await
      cloudinary.uploader.upload(req.files[1].path, function (err, result) {
        if (err) {
          return err;
        }
        else{
         return result 
        }
      });
    }
    let postImg =[];
    for (let i=0; i<postArr.length; i++){
      postImg[i] = postArr[i].url 
    }
    let postDetails = {
      postImg: postImg,
      caption: req.body.caption,
      albumId : req.body.albumId,
    };
    let result = await postServ.create(postDetails);
    util.sendResponse(result, req, res);
  },
  getById: async function (req, res) {
    let result = await postServ.getById(req.params.id);
    util.sendResponse(result, req, res);
  },
};
