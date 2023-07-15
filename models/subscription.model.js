const mongoose = require("mongoose");

const subscriptionSchema = mongoose.Schema(
  {
    space: {
      type: String,
    },
    price:{
      type : Number,
    },
    discription: {
      type: String,
    },
    validity:{
      type :String
    },
    previleges:{
        type :String 
    },
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Subscription = mongoose.model("subscription", subscriptionSchema);
module.exports = Subscription;
