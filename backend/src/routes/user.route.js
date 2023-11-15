const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const { verifyToken } = require("../utils/auth");

router.get("/", userControllers.read);
router.put("/", verifyToken, userControllers.updateUser);

module.exports = router;
