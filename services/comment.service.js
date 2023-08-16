const Comment = require("../models/comment.model")
require("dotenv").config();
module.exports = {
  create: async function (body) {
    console.log(body)
    let result = {};
    try {
      result.data = await Comment(body).save();
      result.status = true;
      result.message = "Comment added successfully";
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result;
  },
  getAll: async function (query) {
    console.log(query)
    let result = {};
    try {
      result.data = await Comment.find(query).populate({path : "albumId"}).populate({path : "userId"}).populate({path : "postId"});
      result.message = "Comment list fatched successfully";
      result.status = true;
      result.count = await Comment.count(query)
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result;
  },
  getByCommentId: async function (id) {
    let result = {};
    try {
      result.data = await Comment.find({_id : id}).populate({path : "albumId"}).populate({path : "userId"}).populate({path : "postId"});
      result.message = "Comment list fatched successfully";
      result.status = true;
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result;
  },
  delete: async function (id) {
    let result = {};
    try {
      result.data = await Comment.findByIdAndDelete(id);
      result.message = "Comment deleted  successfully";
      result.status = true;
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result;
  },
};
