const util = require('util');
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// const id = 0;

const readDb = function (){
   return readFileAsync("./db.json", "utf8")
   .then(function(data){
       console.log(data)
   })
}
readDb()

const writeNote = function (){
    return writeFileAsync("./db.json", JSON.stringify(note))
}

var note = [{
    
}]

writeNote(note)