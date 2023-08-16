const Post = require("../models/post.model");
require("dotenv").config();
module.exports = {
  create: async function (body) {
    let result = {};
    try {
      result.data = await Post(body).save();
      result.message = "Post created successfully";
      result.status = true;
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result
  },
  getById : async function (id){
    console.log(id)
    let result = {}
    try {
      result.data=  await Post.findOne({albumId : id}).populate({path : "albumId"});
      result.message ="Post data fetched successfully"
      result.status = true;
    } catch (error) {
      result.status = true;
      result.err = error
    }
    return result
  }
};
