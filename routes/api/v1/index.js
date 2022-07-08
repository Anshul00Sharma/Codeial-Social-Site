// importing express
const express = require("express");
// intitialize router
const router = express.Router();

router.use("/posts", require("./posts"));

module.exports = router;
