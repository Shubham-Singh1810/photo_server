const eventServ = require("../services/event.service");
const util = require("../utils/util");
const imgUpload = require("../utils/multer");
require("dotenv").config();
module.exports ={
    create : async function(req, res){
        let eventImgUrl = process.env.API_BASE_URL+req.file.path
        let eventDetails = {
            eventImgUrl : eventImgUrl,
            name: req.body.name,
        }
        let result = await eventServ.create(eventDetails);
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
        let eventImgUrl = process.env.API_BASE_URL+req.file.path
        let eventDetails = {
            eventImgUrl : eventImgUrl,
            name: req.body.name,
            _id: req.body._id
        }
        let result = await eventServ.update(eventDetails);
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

