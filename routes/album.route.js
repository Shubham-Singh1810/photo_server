const express = require("express");
const router= express.Router();
const albumController = require("../controller/album.controller");
const auth = require("../middleware/auth")
const imgUpload = require("../utils/multer");

router.route("/create").post(auth, imgUpload.single("albumImgUrl"), albumController.create);
router.route("/getAll").get(auth, albumController.getAll);
module.exports = router