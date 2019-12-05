var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Designated port || localhost:3000
var PORT = process.env.PORT || 3000;
// Represents our Express App
var app = express();
// Require our routes
var routes = require("./routes");

// Parse request body as JSON
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// Every request goes through our route middleware
// app.use(routes);

// If deployed, use the deploted database. Otherwise use the local mongoHealines database
var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);

// Listen on the port
mongoose.connect(MONGODB_URI);

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
