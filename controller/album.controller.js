const albumServ = require("../services/album.service");
const util = require("../utils/util")
require("dotenv").config();
module.exports ={
    create : async function(req, res){
        console.log(req.file)
        let albumThumbImg = process.env.F_B_U+req.file.path
        let albumDetails = {
            albumThumbImg : albumThumbImg,
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

