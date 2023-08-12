const express = require("express");
const router= express.Router();
const eventController = require("../controller/event.controller")
const auth = require("../middleware/auth");
const upload = require("../utils/multer");

router.route("/create").post( upload.single("eventImgUrl"), eventController.create);
router.route("/getAll").get(auth, eventController.getAll);
router.route("/getById/:id").get( eventController.getEvent);
router.route("/update/").put( upload.single("eventImgUrl"),  eventController.update);
router.route("/updateName/").put(auth,  eventController.updateNameOnly);
router.route("/:id").delete(auth, eventController.delete);
module.exports = router