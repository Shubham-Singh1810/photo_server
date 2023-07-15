const express = require("express");
const router= express.Router();
const subscriptionControl = require("../controller/subscription.controller")

router.route("/create").post(subscriptionControl.create);
router.route("/getAll").get(subscriptionControl.getAll);
router.route("/getById/:id").get(subscriptionControl.getById);
router.route("/:id").delete(subscriptionControl.delete);
router.route("/update").put(subscriptionControl.update);

module.exports = router