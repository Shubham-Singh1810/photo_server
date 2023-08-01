const Comment = require("../models/comment.model")
require("dotenv").config();
module.exports = {
  create: async function (body) {
    console.log(body)
    let result = {};
    try {
      result.data = await Comment(body).save();
      result.message = "Comment added successfully";
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  getAll: async function (query) {
    console.log(query)
    let result = {};
    try {
      result.data = await Comment.find(query).populate({path : "albumId"}).populate({path : "userId"}).populate({path : "postId"});
      result.message = "Comment list fatched successfully";
      result.count = await Comment.count(query)
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  getByCommentId: async function (id) {
    let result = {};
    try {
      result.data = await Comment.find({_id : id}).populate({path : "albumId"}).populate({path : "userId"}).populate({path : "postId"});
      result.message = "Comment list fatched successfully";
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  delete: async function (id) {
    let result = {};
    try {
      result.data = await Comment.findByIdAndDelete(id);
      result.message = "Comment deleted  successfully";
    } catch (error) {
        console.log(error)
      result.err = error;
    }
    return result;
  },
};
