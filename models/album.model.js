const mongoose = require("mongoose");

const albumSchema = mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    name: { type: String },
    albumImgUrl: { type: String },
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Album = mongoose.model("albums", albumSchema);
module.exports = Album;
