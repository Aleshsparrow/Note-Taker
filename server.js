// Requiring the important npm packages
var express = require("express");

// Requiring the api and html routes
var apiRoutes = require("./routes/apiroutes");
var htmlRoutes = require("./routes/htmlroutes");

// Setting up port for the server
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Giving acces to the server to use the html and the api routes
app.use(express.static("public"));
htmlRoutes(app);
apiRoutes(app);



// Setting up port for the server
app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });