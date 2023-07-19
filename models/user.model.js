const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    password: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    fullName: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
    },
    user_staus: {
      type: String,
      default: "Active",
    },
    subscriptionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
    },
    subscription_staus: {
      type: String,
      default: "Inactive",
    },
    subscription_expiry_date: {
      type: Date,
    },
  },
  { timestamps: { createdAt: "createdAt" } }
);

let User = mongoose.model("users", userSchema);
module.exports = User;
