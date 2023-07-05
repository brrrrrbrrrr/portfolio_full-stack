const router = require("express").Router();
const userLogin = require("./login.user.route");
const user = require("./user.route");

router.use("/user/login", userLogin);
router.use("/user", user);

module.exports = router;
