// set up express server
const express = require("express");
const app = express();
const port = 8000;

// use express router
app.use("/", require("./routes"));

// catch errors
app.listen(port, function (err) {
  if (err) {
    console.log(`Error ${err} while running the express app`);
  }
  console.log(`Server is running on port : ${port}`);
});
