const User = require("../models/user");
const ObjectId = require("mongodb").ObjectId;

exports.getUser = async (req, res) => {
  let { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
