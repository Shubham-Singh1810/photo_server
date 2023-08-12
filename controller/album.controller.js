const albumServ = require("../services/album.service");
const util = require("../utils/util");
const cloudinary = require("../utils/cloudinary");
require("dotenv").config();
module.exports = {
  create: async function (req, res) {
    let albumThumbImg = await
    cloudinary.uploader.upload(req.file.path, function (err, result) {
      if (err) {
        return err;
      }
      else{
        return result.data
      }
    });
    let result = await albumServ.create({...req.body, albumThumbImg:albumThumbImg.url});
    util.sendResponse(result, req, res);
  },
  getAll: async function (req, res) {
    let result = await albumServ.getAll();
    util.sendResponse(result, req, res);
  },
};
