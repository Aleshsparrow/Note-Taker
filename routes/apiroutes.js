// var data = require("../Develop/db")
var fs = require("fs")
var util = require("util");
var readFileAsync = util.promisify(fs.readFile)


module.exports = function(app){

    app.get("/api/notes", function(req, res) {
      readFileAsync("../db/db.json", "utf8")
      .then(function (data){
        console.log(data)
      });
      res.json(data)
    });
    
    app.post("/api/notes", function(req, res) {
       console.log(req.body)
       res.send({})
    });
  }
  