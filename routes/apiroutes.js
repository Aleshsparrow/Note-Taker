// var data = require("../Develop/db")
var fs = require("fs")
// var util = require("util");
// var readFileAsync = util.promisify(fs.readFile)
var store = require("../db/db.json")
var largestID = 0;

module.exports = function(app){

    app.get("/api/notes", function(req, res) {
      console.log(store)
      // res.send("Working")
      res.json(store);
    });
    
    app.post("/api/notes", function(req, res) {
       console.log(req.body)
       for(i=0;i<store.length;i++){
         if(store[i].id>largestID){
            largestID = store[i].id
         }
       }
       req.body["id"] = parseInt(largestID)+1;
       console.log(res.body);
       store.push(req.body)
       let data = JSON.stringify(store, null, 2);
       console.log(data)
      fs.writeFile("./db/db.json", data, (err) => {
        if(err)throw err;
        console.log("completed");
        res.redirect("/notes")
      })
      //  console.log(data)
      //  res.send("Got it")
    });

    app.delete("/api/notes", (req, res) => {
      console.log("hitting route")
    })
  }
  