const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  dueDate: {
    type: String,
    required: true,
  },
  user: {
    type: String,
  },
});

module.exports = mongoose.model("Task", taskSchema);
