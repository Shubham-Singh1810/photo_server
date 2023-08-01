const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    albumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "albums",
      required: true,
    },
    caption: { type: String },
    postImg: [{ type: String }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Post = mongoose.model("posts", postSchema);
module.exports = Post;
