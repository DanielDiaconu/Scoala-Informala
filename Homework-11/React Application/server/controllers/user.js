const User = require("../models/user");

exports.getUser = async (req, res) => {
  let { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  let { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};
