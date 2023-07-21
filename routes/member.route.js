const express = require("express");
const router= express.Router();
const memberController = require("../controller/member.controller")
const imgUpload = require("../utils/multer");
const auth = require("../middleware/auth")

router.route("/create").post(auth, imgUpload.single("image"), memberController.create);
router.route("/getAll").get(auth, memberController.getAll);
router.route("/getById/:id").get(auth, memberController.getEvent);
// router.route("/update/").put(auth, imgUpload.single("eventImgUrl"),  memberController.update);
// router.route("/updateName/").put(auth,  memberController.updateNameOnly);
router.route("/:id").delete(auth, memberController.delete);
module.exports = router