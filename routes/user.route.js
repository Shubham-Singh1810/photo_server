const express = require("express");
const router= express.Router();
const userController = require("../controller/user.controller")
const imgUpload = require("../utils/multer")

router.route("/signUp").post(imgUpload.single("profileImg"), userController.signUp);
router.route("/login").post(userController.login);
router.route("/getUserList").get(userController.getUserList);



module.exports = router