const express = require("express");
const router= express.Router();
const eventController = require("../controller/event.controller")
const imgUpload = require("../utils/multer")

router.route("/create").post(imgUpload.single("eventImgUrl"), eventController.create);
router.route("/getAll").get(eventController.getAll);
module.exports = router