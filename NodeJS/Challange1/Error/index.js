var fs = require("fs")

fs.writeFileSync("bio.txt", "File testing")
fs.appendFileSync("bio.txt", ". Testing File")

readData = fs.readFileSync("bio.txt")
readData = readData.toString();

console.log(readData)

fs.renameSync("bio.txt", "mybio.txt")
fs.unlinkSync("mybio.txt")
fs.rmdirSync("Challange1")