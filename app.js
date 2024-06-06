const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const Handlebars = require("handlebars");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static Files
app.use(express.static("public"));

// Handlebars Helpers
const hbsHelpers = exphbs.create({
  extname: ".hbs",
  helpers: {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    gt: (a, b) => a > b,
    lt: (a, b) => a < b,
  }
});

// Template Engine
app.engine('hbs', hbsHelpers.engine);
app.set("view engine", "hbs");

// Router
const routes = require("./server/routes/students");
app.use('/', routes);

// Listen Port
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
