const router = require("express").Router();
const userLogin = require("./login.user.route");
const user = require("./user.route");
const project = require("./project.route");

router.use("/user/login", userLogin);
router.use("/user", user);
router.use("/project", project);

module.exports = router;
