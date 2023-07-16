const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
      name:{type:String},
      eventImgUrl: { type: String },    
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Event = mongoose.model("events", eventSchema);
module.exports = Event;
