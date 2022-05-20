// importing express
const express = require("express");
const homeController = require("../controllers/home_controller");

// intitialize router
const router = express.Router();

console.log("Router Loaded");

router.get("/", homeController.home);
router.use("/users", require("./users"));

module.exports = router;
