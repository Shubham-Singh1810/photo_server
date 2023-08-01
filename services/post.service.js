const Post = require("../models/post.model");
require("dotenv").config();
module.exports = {
  create: async function (body) {
    let result = {};
    try {
      result.data = await Post(body).save();
      result.message = "Post created successfully";
    } catch (error) {
      result.err = error;
    }
    return result
  },
  getById : async function (id){
    console.log(id)
    let result = {}
    try {
      result.data=  await Post.findOne({albumId : id}).populate({path : "albumId"})
    } catch (error) {
      console.log(error)
      result.err = error
    }
    return result
  }
};
