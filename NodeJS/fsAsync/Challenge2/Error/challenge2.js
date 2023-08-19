var fs = require("fs")

fs.writeFile("bio.txt", "Original Data", (err) => {
    console.log("Data entered successfully")
})

fs.appendFile("bio.txt", ". This is appended String", (err) => {
    console.log("Additional String appended succesfully")
})

fs.readFile("bio.txt", "utf-8", (err, data) => {
    console.log(data)
    console.log("Data read successfully")
})

fs.rename("bio.txt", "mybio.txt", (err) => {
    console.log("File renamed successfully")
})

fs.unlink("mybio.txt", (err) => {
    console.log("File deleted successfully")
})


fs.rmdir("Challenge2", (err) => {
    console.log("Folder deleted successfully")
})







