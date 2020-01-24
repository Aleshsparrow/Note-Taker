var express = require("express");
// var path = require("path")
var apiRoutes = require("./routes/apiroutes");
var htmlRoutes = require("./routes/htmlroutes");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));
// app.use("/api", apiRoutes);
htmlRoutes(app);
apiRoutes(app);
// app.use("/", htmlRoutes);




app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });