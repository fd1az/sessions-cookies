const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");

//Routes
const mainRoute = require("./routes/index");

const app = express();

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//view engine

app.use(
  sessions({
    secret: "secret word!",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", mainRoute);

app.listen(4001, () => {
  console.log("server running on port 4001");
});
