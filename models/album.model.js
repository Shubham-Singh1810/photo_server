const mongoose = require("mongoose");

const albumSchema = mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    albumName: { type: String },
    albumThumbImg: { type: String },
    isLive: {
      type: Boolean,
      default: true,
    },
    laterDate: {
      type: Date,
    },
    laterTime: {
      type: Date,
    },
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Album = mongoose.model("albums", albumSchema);
module.exports = Album;
