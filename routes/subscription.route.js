const express = require("express");
const router= express.Router();
const subscriptionControl = require("../controller/subscription.controller");
const auth = require("../middleware/auth")

router.route("/create").post(auth, subscriptionControl.create);
router.route("/getAll").get(auth, subscriptionControl.getAll);
router.route("/getById/:id").get(auth, subscriptionControl.getById);
router.route("/:id").delete(auth, subscriptionControl.delete);
router.route("/update").put(auth, subscriptionControl.update);

module.exports = router