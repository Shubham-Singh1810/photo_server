const Event = require("../models/event.model");
require("dotenv").config();
module.exports = {
  create: async function (body) {
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
};
