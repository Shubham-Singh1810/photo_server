const express = require("express");
const router= express.Router();
const postController = require("../controller/post.controller")
const imgUpload = require("../utils/multer")

router.route("/create").post(imgUpload.single("postImgUrl"), postController.create);
router.route("/getAll").get(postController.getAll);
module.exports = router