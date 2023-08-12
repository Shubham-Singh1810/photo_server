const memberServ = require("../services/member.service");
const util = require("../utils/util");
const cloudinary = require("../utils/cloudinary");

require("dotenv").config();
module.exports ={
    create : async function(req, res){
        let image = await
        cloudinary.uploader.upload(req.file.path, function (err, result) {
          if (err) {
            return err;
          }
          else{
            return result.data
          }
        });
        let result = await memberServ.create({...req.body, image:image});
        util.sendResponse(result, req, res);
    },
    getAll : async function(req, res){
        let result = await memberServ.getAll();
        util.sendResponse(result, req, res);
    },
    getEvent : async function(req, res){
        let result = await memberServ.getMember(req.params.id);
        util.sendResponse(result, req, res);
    },
    // update : async function(req, res){
    //     let eventImgUrl = process.env.API_BASE_URL+req.file.path
    //     let eventDetails = {
    //         eventImgUrl : eventImgUrl,
    //         name: req.body.name,
    //         _id: req.body._id
    //     }
    //     let result = await eventServ.update(eventDetails);
    //     util.sendResponse(result, req, res);
    // },
    // updateNameOnly : async function(req, res){
    //     let result = await eventServ.update(req.body);
    //     util.sendResponse(result, req, res);
    // },
    delete : async function(req, res){
        let result = await memberServ.delete(req.params.id);
        util.sendResponse(result, req, res);
    }
}

