const router = require("express").Router();
const { verifyToken } = require("../utils/auth");
const projectControllers = require("../controllers/projectControllers");

router.post("/", verifyToken, projectControllers.add);
router.get("/", projectControllers.browse);
router.put(
  "/:id",
  verifyToken,
  projectControllers.destroy,
  projectControllers.insertTechs
);
module.exports = router;
