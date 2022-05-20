// set up express server
const express = require("express");
const app = express();
const port = 8000;

// setting up layout
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

// extract style and script from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// setting up assets folder
app.use(
  express.static("C:/Users/anshu/OneDrive/Desktop/Projects/Codeial/assets")
);

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
