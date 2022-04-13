const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Admin = Schema({
  name: {
    type: String,
    required: true
  },
  adminid: {
      unique: true,
      type: String,
      required: true
  },
  email: {
    type: String,
    required: true
  },
  phonenumber: {
      type: String,
      required: true
  },
  college: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  img: {
      default: "",
      type: String
  }
});

module.exports = mongoose.model("Admin", Admin);