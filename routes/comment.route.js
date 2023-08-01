const express = require("express");
const router= express.Router();
const commentController = require("../controller/comment.controller");
const auth = require("../middleware/auth")

router.route("/create").post(auth,  commentController.create);
router.route("/getAll").post(auth, commentController.getAll);
router.route("/get/:id").get(auth, commentController.getByCommentId);
router.route("/:id").delete(auth, commentController.delete);
module.exports = router