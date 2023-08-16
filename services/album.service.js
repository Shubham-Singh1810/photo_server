const Album = require("../models/album.model");
require("dotenv").config();
module.exports = {
  create: async function (body) {
    let result = {};
    try {
      result.data = await Album(body).save();
      result.message = "Album created successfully";
      result.status = true;
    } catch (error) {
      result.status = false;
      result.err = error;
    }
    return result
  },
  getAll: async function (body) {
    let result = {};
    try {
      result.data=  await Album.find({})
      result.message = "Album list fatched successfully";
      result.status = true;
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result
  },
};
