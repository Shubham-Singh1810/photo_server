const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    albumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "albums",
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
      required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
    message: {
      type: String,
    },
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Comment = mongoose.model("comments", commentSchema);
module.exports = Comment;
