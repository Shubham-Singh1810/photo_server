const Event = require("../models/event.model");
require("dotenv").config();
module.exports = {
  create: async function (body) {
    console.log(body)
    let result = {};
    try {
      result.data = await Event(body).save();
      result.message = "Event created successfully";
    } catch (error) {
      result.err = error;
    }
    return result
  },
  getAll: async function (body) {
    let result = {};
    try {
      result.data = await Event.find();
      result.message = "Event list fatched successfully";
    } catch (error) {
      result.err = error;
    }
    return result
  },
  getEvent: async function (id) {
    let result = {};
    try {
      result.data = await Event.findOne({_id: id});
      result.message = "Event data fatched successfully";
    } catch (error) {
      result.err = error;
    }
    return result
  },
  update: async function (body) {
    console.log(body)
    let result = {};
    try {
      result.data = await Event.findByIdAndUpdate(body._id, { $set: body }, { new: true });
      result.message = "Record Updated successfully";
    } catch (error) {
      result.err = error;
    }
    return result
  },
  delete: async function (id) {
    let result = {};
    try {
      result.data = await Event.findByIdAndDelete(id);
      result.message = "Record Deleted Successfully";
    } catch (error) {
      result.err = error.message;
    }
    return result;
  },
};
