const Task = require("../models/task");

exports.getTasks = async (req, res) => {
  let { id } = req.params;
  try {
    const tasks = await Task.find({ user: id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.postTask = async (req, res) => {
  let body = req.body;
  const newTask = new Task({
    taskName: body.taskName,
    taskDescription: body.taskDescription,
    status: body.status,
    dueDate: body.dueDate,
    user: body.user,
  });

  try {
    const task = await newTask.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  let { id } = req.params;
  try {
    let task = await Task.findByIdAndUpdate(
      id,
      {
        status: "completed",
      },
      { new: true }
    );
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  let { id } = req.params;
  try {
    let task = await Task.deleteOne({ _id: id });
    res.status(300).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
