const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/codeial_devlopment");

const db = mongoose.connection;

db.addListener(
  "error",
  console.error.bind(console, "Error connection to mongodb")
);

db.once("open", function () {
  console.log("Connected to database :: MongoDB");
});

module.exports = db;
