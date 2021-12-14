const express = require("express");
const router = express.Router();
const {
  postTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/task");

router.get("/:id", (req, res) => {
  return getTasks(req, res);
});

router.put("/:id", (req, res) => {
  return updateTask(req, res);
});

router.delete("/:id", (req, res) => {
  return deleteTask(req, res);
});

router.post("/", (req, res) => {
  return postTask(req, res);
});

module.exports = router;
