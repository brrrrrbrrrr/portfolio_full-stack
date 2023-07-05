const router = require("express").Router();
const userControllers = require("../controllers/userControllers");

router.get("/", userControllers.read);

module.exports = router;
