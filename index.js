// npm install cookie-parser
//npm install session
// npm install passport
// set up express server
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
// used for session cookie
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const MongoStore = require("connect-mongo");
// sass for css
const sassMiddleware = require("node-sass-middleware");

// setting up layout
const expressLayouts = require("express-ejs-layouts");

app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: true,
    outputStyle: "expanded",
    prefix: "/css",
  })
);

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// setting up assets folder
app.use(express.static("assets"));

app.use(expressLayouts);
// extract style and script from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//set view engine ejs
app.set("view engine", "ejs");
app.set("views", "./views");

// * mongo store is used to store the session cookie in the db
app.use(
  session({
    name: "codeial",
    //TODO: change the secret before deployemt in production
    secret: "blahsomthing",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create(
      {
        mongoUrl: "mongodb://localhost/codeial_devlopment",
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

// use express router
app.use("/", require("./routes"));

// catch errors
app.listen(port, function (err) {
  if (err) {
    console.log(`Error ${err} while running the express app`);
  }
  console.log(`Server is running on port : ${port}`);
});
