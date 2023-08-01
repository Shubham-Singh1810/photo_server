const express = require("express");
const router= express.Router();
const postController = require("../controller/post.controller")
const imgUpload = require("../utils/multer");
const auth = require("../middleware/auth")

router.route("/create").post(auth, imgUpload.array("postImg", 10), postController.create);
router.route("/get/:id").get(auth, postController.getById);
module.exports = router