const express = require("express");
const app = express();
const port = 8000;

// Database
const db = require("./config/mongoose");
const Todo = require("./models/todo");

//SETTING UP STATICS AND BODY PARSER
app.use(express.static("./assets"));
app.use(express.urlencoded());

// use express router
app.use("/", require("./routes"));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
