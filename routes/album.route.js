const express = require("express");
const router= express.Router();
const albumController = require("../controller/album.controller")
const imgUpload = require("../utils/multer")

router.route("/create").post(imgUpload.single("albumImgUrl"), albumController.create);
router.route("/getAll").get(albumController.getAll);
module.exports = router