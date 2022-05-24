// npm install cookie-parser

// set up express server
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const db = require("./config/mongoose");

app.use(express.urlencoded());

app.use(cookieParser());

// setting up layout
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

// extract style and script from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// setting up assets folder
app.use(express.static("assets"));

// use express router
app.use("/", require("./routes"));

//set view engine ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// catch errors
app.listen(port, function (err) {
  if (err) {
    console.log(`Error ${err} while running the express app`);
  }
  console.log(`Server is running on port : ${port}`);
});
