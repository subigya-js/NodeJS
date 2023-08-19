var fs = require("fs")

// Creating a new file if there is no any file present.
fs.writeFileSync("read.txt", "Subigya Subedi")

// Writing inside the file which is already present
fs.writeFileSync("subedi.txt", "Gaurav Subedi")

// Appending some contents into the file
fs.appendFileSync("read.txt", " gaurav subedi")

let readvalue = fs.readFileSync("read.txt")

console.log(readvalue.toString())


fs.renameSync("write.txt", "readWrite.txt")









