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
  getAll : async function (){
    let result = {}
    try {
      result.data=  await Post.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "author",
            foreignField: "_id",
            as: "author",
          },
        },
        {
          $unwind: {
            path: "$author",
            includeArrayIndex: "string",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "likes",
            foreignField: "_id",
            as: "likes",
          },
        },
        {
          $unwind: {
            path: "$likes",
            includeArrayIndex: "string",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $project: {
            fullName: "$author.fullName",
            phoneNumber: "$author.phoneNumber",
            user_id: "$author._id",
            profileImg:"$author.profileImg",
            likes: {
              user_id: "$likes._id",
              phoneNumber: "$likes.phoneNumber",
              fullName: "$likes.fullName",
              profileImg: "$likes.profileImg"
            },
            createdAt: 1,
            updatedAt: 1,
            postImgUrl: 1,
            caption: 1,
          },
        },
        {
          $group: {
            _id: "$_id",
            fullName: {
              $first: "$fullName",
            },
            phoneNumber: {
              $first: "$phoneNumber",
            },
            user_id: {
              $first: "$user_id",
            },
            createdAt: {
              $first: "$createdAt",
            },
            updatedAt: {
              $first: "$updatedAt",
            },
            postImgUrl: {
              $first: "$postImgUrl",
            },
            profileImg :{
              $first : "$profileImg",
            },
            caption: {
              $first: "$caption",
            },
            likes: {
              $push: "$likes",
            },
          },
        },
      ]);
    } catch (error) {
      result.err = error
    }
    return result
  }
};
