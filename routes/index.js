const router = require("express").Router();
const pledgeRoutes = require("./pledgeformroutes");

router.use("/pledge", pledgeRoutes);
module.exports = router;