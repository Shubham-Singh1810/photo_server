const postServ = require("../services/post.service");
const util = require("../utils/util");
require("dotenv").config();
module.exports = {
  create: async function (req, res) {
    let postImg = [];
    for (let i = 0; i < req.files.length; i++) {
      postImg[i] =(process.env.F_B_U + req.files[i].path);
    }
    console.log(postImg);
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
