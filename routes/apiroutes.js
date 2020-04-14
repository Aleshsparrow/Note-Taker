// Requiring the important npm package
var fs = require("fs")
// Requiring from the database set up
var store = require("../db/db.json")
var largestID = 0;


// Setting up different routes and exporting
module.exports = function(app){
  // Get route to get the saved notes
    app.get("/api/notes", function(req, res) {
      console.log(store)
      res.json(store);
    });
    // Post route
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
      
    });
// Delete route
    app.delete("/api/notes", (req, res) => {
      console.log("hitting route")
    })
  }
  