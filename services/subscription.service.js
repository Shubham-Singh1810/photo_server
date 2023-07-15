const Subscription = require("../models/subscription.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = {
  create: async function (body) {
    let result = {};
    try {
      result.data = await new Subscription(body).save();
      result.message = "Plan added successfully";
    } catch (error) {
      result.err = error.message;
    }
    return result;
  },
  getAll: async function () {
    let result = {};
    try {
      result.data = await Subscription.find();
      result.message = "Get all data";
    } catch (error) {
      result.err = error.message;
    }
    return result;
  },
  getById: async function (id) {
    let result = {};
    try {
      result.data = await Subscription.findOne({ _id: id });
      result.message = "Detail fetched successfully";
    } catch (error) {
      result.err = error.message;
    }
    return result;
  },
  update: async function (body) {
    let result = {};
    try {
      result.data = await Subscription.findByIdAndUpdate(body._id, { $set: body }, { new: true });
      result.message = "Record Updated Successfully";
    } catch (error) {
      result.err = error.message;
    }
    return result;
  },
  delete: async function (id) {
    let result = {};
    try {
      result.data = await Subscription.findByIdAndDelete(id);
      result.message = "Record Deleted Successfully";
    } catch (error) {
      result.err = error.message;
    }
    return result;
  },
};
