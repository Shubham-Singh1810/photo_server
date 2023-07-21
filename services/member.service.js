const Member = require("../models/member.model");
require("dotenv").config();
module.exports = {
  create: async function (body) {
    console.log(body)
    let result = {};
    try {
      result.data = await Member(body).save();
      result.message = "Member created successfully";
    } catch (error) {
      result.err = error;
    }
    return result
  },
  getAll: async function (body) {
    let result = {};
    try {
      result.data = await Member.find();
      result.message = "Member list fatched successfully";
    } catch (error) {
      result.err = error;
    }
    return result
  },
  getMember: async function (id) {
    let result = {};
    try {
      result.data = await Member.findOne({_id: id});
      result.message = "Member data fatched successfully";
    } catch (error) {
      result.err = error;
    }
    return result
  },
  update: async function (body) {
    let result = {};
    try {
      result.data = await Member.findByIdAndUpdate(body._id, { $set: body }, { new: true });
      result.message = "Record Updated successfully";
    } catch (error) {
      result.err = error;
    }
    return result
  },
  delete: async function (id) {
    let result = {};
    try {
      result.data = await Member.findByIdAndDelete(id);
      result.message = "Record Deleted Successfully";
    } catch (error) {
      result.err = error.message;
    }
    return result;
  },
};
