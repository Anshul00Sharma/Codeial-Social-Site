const { Route } = require("express");
const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users_controller");

// Route the page to usersController
router.get("/profile", usersController.profile);

router.get("/sign-up", usersController.signUp);

router.get("/sign-in", usersController.signIn);

router.post("/create", usersController.create);

module.exports = router;
