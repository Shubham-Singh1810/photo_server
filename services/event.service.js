const Event = require("../models/event.model");
require("dotenv").config();
module.exports = {
  create: async function (body) {
    console.log(body)
    let result = {};
    try {
      result.data = await Event(body).save();
      result.message = "Event created successfully";
      result.status = true;
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result
  },
  getAll: async function (body) {
    let result = {};
    try {
      result.data = await Event.find();
      result.message = "Event list fatched successfully";
      result.status = true;
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result
  },
  getEvent: async function (id) {
    let result = {};
    try {
      result.data = await Event.findOne({_id: id});
      result.message = "Event data fatched successfully";
      result.status = true;
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result
  },
  update: async function (body) {
    console.log(body)
    let result = {};
    try {
      result.data = await Event.findByIdAndUpdate(body._id, { $set: body }, { new: true });
      result.status = true;
      result.message = "Record Updated successfully";
    } catch (error) {
      result.err = error;
      result.status = false;
    }
    return result
  },
  delete: async function (id) {
    let result = {};
    try {
      result.data = await Event.findByIdAndDelete(id);
      result.message = "Record Deleted Successfully";
      result.status = true;
    } catch (error) {
      result.err = error.message;
      result.status = false;
    }
    return result;
  },
};
