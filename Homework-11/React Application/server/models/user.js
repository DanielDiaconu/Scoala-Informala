const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  tasks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task",
  },
  avatar: {
    type: String,
    default: "default-avatar.jpg",
  },
});

module.exports = mongoose.model("User", userSchema);
