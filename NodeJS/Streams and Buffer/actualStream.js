const fs = require("fs")
const http = require("http")

const server = http.createServer()

server.on("request", (req, res) => {
    const rstream = fs.createReadStream("input.txt")

    rstream.on("data", (chunkData) => {
        res.write(chunkData)
    })

    rstream.on("end", () => {
        res.end() 
    })

    rstream.on("error", (err) => {
        console.log(err)
        res.end("File Not Found!!")
    })
})

server.listen(9000, "127.0.0.1") 