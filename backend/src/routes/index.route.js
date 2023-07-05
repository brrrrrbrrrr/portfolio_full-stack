const router = require("express").Router();
const userLogin = require("./login.user.route");

router.use("/user/login", userLogin);

module.exports = router;
