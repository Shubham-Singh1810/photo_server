const mongoose = require("mongoose");

const memberSchema = mongoose.Schema(
  {
    
    name: { type: String },
    image: { type: String },
    email: { type: String },
   
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Member = mongoose.model("member", memberSchema);
module.exports = Member;
