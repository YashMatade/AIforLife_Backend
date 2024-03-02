const pledgeformController = require("../controller/pledgeformcontroller");
const router = require("express").Router();

router.post("/save", pledgeformController.save);
module.exports = router;