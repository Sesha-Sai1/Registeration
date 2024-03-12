const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  password2: String,
});

const RegisterModel = mongoose.model("register", RegisterSchema);
module.exports = RegisterModel;
