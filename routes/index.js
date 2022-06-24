// importing express
const express = require("express");
const homeController = require("../controllers/home_controller");

// intitialize router
const router = express.Router();

console.log("Router Loaded");

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/posts", require("./posts"));
router.use("/comments", require("./comments"));

module.exports = router;
