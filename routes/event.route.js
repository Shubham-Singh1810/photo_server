const express = require("express");
const router= express.Router();
const eventController = require("../controller/event.controller")
const imgUpload = require("../utils/multer");
const auth = require("../middleware/auth")

router.route("/create").post(auth, imgUpload.single("eventImgUrl"), eventController.create);
router.route("/getAll").get(auth, eventController.getAll);
module.exports = router