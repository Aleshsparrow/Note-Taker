// Requiring important npm packages
const util = require('util');
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const readDb = function (){
   return readFileAsync("./db/db.json", "utf8")
   .then(function(data){
       console.log(data)
   })
}
// Exporting 
module.exports = readDb