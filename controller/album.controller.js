const albumServ = require("../services/album.service");
const util = require("../utils/util")
require("dotenv").config();
module.exports ={
    create : async function(req, res){
        let albumImgUrl = process.env.API_BASE_URL+req.file.path
        let albumDetails = {
            albumImgUrl : albumImgUrl,
            name: req.body.name,
            eventId : req.body.eventId
        }
        let result = await albumServ.create(albumDetails);
        util.sendResponse(result, req, res);
    },
    getAll : async function(req, res){
        let result = await albumServ.getAll();
        util.sendResponse(result, req, res);
    }
}

