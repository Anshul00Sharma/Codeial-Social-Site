// importing express
const express = require("express");
// intitialize router
const router = express.Router();

const postsApi = require("../../../controllers/api/v1/posts_api");

router.get("/", postsApi.index);

router.delete("/:id", postsApi.destroy);

module.exports = router;
