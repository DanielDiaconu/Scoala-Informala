const { getUser, updateUser } = require("../controllers/user");

const router = require("express").Router();

router.get("/:id", (req, res) => {
  return getUser(req, res);
});

router.put("/:id", (req, res) => {
  return updateUser(req, res);
});

module.exports = router;
