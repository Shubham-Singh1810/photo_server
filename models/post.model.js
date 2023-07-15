const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      caption: { type: String },
      postImgUrl: { type: String },
      likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
      comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
      shares: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Post = mongoose.model("posts", postSchema);
module.exports = Post;
