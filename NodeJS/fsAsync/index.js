var fs = require("fs")

fs.writeFile("async.txt", "This file is a part of Asynchronous NodeJS file module", (err) => {
    console.log("File created successfully")
})


fs.appendFile("async.txt", "This is the appended text", (err) => {
    console.log("String appended successfully")
})

// fs.readFile("async.txt", "utf-8", (err, data) => {
//     console.log(data)
//     console.log("File read successfully")
// })

var readData = fs.readFile("async.txt", (err) => {
    console.log("File read successfully")
})

readData = readData?.toString() || '';

console.log(readData)





