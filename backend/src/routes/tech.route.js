const router = require("express").Router();
const techController = require("../controllers/techControllers");

router.get("/", techController.browse);
module.exports = router;
