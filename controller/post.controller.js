const postServ = require("../services/post.service");
const util = require("../utils/util")
require("dotenv").config();
module.exports ={
    create : async function(req, res){
        let postImgUrl = process.env.API_BASE_URL+req.file.path
        let postDetails = {
            postImgUrl : postImgUrl,
            caption: req.body.caption,
            author : req.body.author,
        }
        let result = await postServ.create(postDetails);
        util.sendResponse(result, req, res);
    },
    getAll : async function(req, res){
        let result = await postServ.getAll();
        util.sendResponse(result, req, res);
    }
}

