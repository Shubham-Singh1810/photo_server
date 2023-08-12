const express = require("express");
const router= express.Router();
const albumController = require("../controller/album.controller");
const auth = require("../middleware/auth")
const upload = require("../utils/multer");

router.route("/create").post( upload.single("albumThumbImg"), albumController.create);
router.route("/getAll").get(auth, albumController.getAll);
module.exports = router