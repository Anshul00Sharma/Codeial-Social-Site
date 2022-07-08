// importing express
const express = require("express");
// intitialize router
const router = express.Router();
const homeController = require("../controllers/home_controller");

console.log("Router Loaded");

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/posts", require("./posts"));
router.use("/comments", require("./comments"));

router.use("/api", require("./api"));

module.exports = router;
