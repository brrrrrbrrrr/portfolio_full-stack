const router = require("express").Router();
const { verifyToken } = require("../utils/auth");
const projectControllers = require("../controllers/projectControllers");

router.post("/", verifyToken, projectControllers.add);
module.exports = router;
