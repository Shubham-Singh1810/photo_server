const eventServ = require("../services/event.service");
const util = require("../utils/util")
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
    }
}

