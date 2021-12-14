const { getUser } = require("../controllers/user");

const router = require("express").Router();

router.get("/", (req, res) => {
  return getUser(req, res);
});

module.exports = router;
