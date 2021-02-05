const express = require("express");

const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("router loaded");
router.use("/update-status", homeController.update);
router.use("/delete", homeController.delete);
router.post("/add", homeController.add);
router.use("/", homeController.home);

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;
