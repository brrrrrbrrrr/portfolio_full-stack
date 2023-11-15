const router = require("express").Router();
const { verifyToken } = require("../utils/auth");
const projectControllers = require("../controllers/projectControllers");

router.post("/", verifyToken, projectControllers.add);
router.get("/", projectControllers.browse);
router.get("/:id", projectControllers.read);
// router.put(
//   "/:id",
//   verifyToken,
//   projectControllers.destroyTech,
//   projectControllers.edit
// );
// router.put(
//   "/:id",
//   verifyToken,
//   projectControllers.destroy,
//   projectControllers.insertTechs
// );
// router.delete("/:id", verifyToken, projectControllers.destroy);
router.put(
  "/:id",
  verifyToken,
  projectControllers.destroyTech,
  projectControllers.insertTechs,
  projectControllers.edit
);
router.post("/:id");
module.exports = router;
