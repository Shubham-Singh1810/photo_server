const eventServ = require("../services/event.service");
const util = require("../utils/util");
require("dotenv").config();
const cloudinary = require("../utils/cloudinary");
module.exports ={
    create : async function(req, res){
        let eventImgUrl  = await
        cloudinary.uploader.upload(req.file.path, function (err, result) {
          if (err) {
            return err;
          }
          else{
            return result.data
          }
        });
        let result = await eventServ.create({...req.body, eventImgUrl:eventImgUrl.url});
        util.sendResponse(result, req, res);
    },
    getAll : async function(req, res){
        let result = await eventServ.getAll();
        util.sendResponse(result, req, res);
    },
    getEvent : async function(req, res){
        let result = await eventServ.getEvent(req.params.id);
        util.sendResponse(result, req, res);
    },
    update : async function(req, res){
        let eventImgUrl  = await
        cloudinary.uploader.upload(req.file.path, function (err, result) {
          if (err) {
            return err;
          }
          else{
            return result.data
          }
        });
        let result = await eventServ.update({...req.body, eventImgUrl:eventImgUrl.url});
        util.sendResponse(result, req, res);
    },
    updateNameOnly : async function(req, res){
        let result = await eventServ.update(req.body);
        util.sendResponse(result, req, res);
    },
    delete : async function(req, res){
        let result = await eventServ.delete(req.params.id);
        util.sendResponse(result, req, res);
    }
}

