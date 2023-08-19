const fs = require("fs")
const http = require("http")

const server = http.createServer()

server.on("request", (req, res) => {
    fs.readFile("input.txt", (error, data) => {
        if (error) console.error(error)

        else {
            res.end(data.toString())
        }
    })
})

server.listen(9000, "127.0.0.1") 