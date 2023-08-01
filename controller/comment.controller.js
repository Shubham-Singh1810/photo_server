const commentServ = require("../services/comment.service");
const util = require("../utils/util")
require("dotenv").config();
module.exports ={
    create : async function(req, res){
        let result = await commentServ.create(req.body);
        util.sendResponse(result, req, res);
    },
    getAll : async function(req, res){
        let result = await commentServ.getAll({albumId : req.body.albumId, postId : req.body.postId , userId : req.body.userId});
        util.sendResponse(result, req, res);
    },
    getByCommentId : async function(req, res){
        let result = await commentServ.getByCommentId({_id : req.params.id});
        util.sendResponse(result, req, res);
    },
    delete : async function(req, res){
        let result = await commentServ.delete(req.params.id);
        util.sendResponse(result, req, res);
    },
}

