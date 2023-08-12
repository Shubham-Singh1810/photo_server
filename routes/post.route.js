const express = require("express");
const router= express.Router();
const postController = require("../controller/post.controller")
const auth = require("../middleware/auth");
const upload = require("../utils/multer");

router.route("/create").post( upload.array("postImg",6), postController.create);
router.route("/get/:id").get(auth, postController.getById);
module.exports = router