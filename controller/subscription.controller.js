const { reset } = require("nodemon");
const subServ = require("../services/subscription.service");
const util = require("../utils/util")
require("dotenv").config();
module.exports = {
    create : async function(req, res){
        let result = await subServ.create(req.body);
        util.sendResponse(result, req, res);
    },
    getAll: async function(req, res){
        let result = await subServ.getAll();
        util.sendResponse(result, req, res);
    },
    getById: async function(req, res){
        let result = await subServ.getById(req.params.id);
        util.sendResponse(result, req, res);
    },
    update: async function(req, res){
        let result = await subServ.update(req.body);
        util.sendResponse(result, req, res);
    },
    delete: async function(req, res){
        let result = await subServ.delete(req.params.id);
        util.sendResponse(result, req, res);
    },
}