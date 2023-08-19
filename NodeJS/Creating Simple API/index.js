import http from "http"
import fs from "fs"

const server = http.createServer((request, response) => {

    const data = fs.readFileSync("./ApiData/userData.json", "utf-8")
    const objData = JSON.parse(data)

    if (request.url == "/") {
        response.end("Home Page")
    }

    else if (request.url == "/about") {
        response.end("About Page")
    }

    else if (request.url == "/contact") {
        response.end("Contact Page")
    }

    else if (request.url == "/api") {
        response.writeHead(200, { "content-type": "application/json" })
        response.end(objData[2].username)
    }

    else {
        response.writeHead(404, { "content-type": "document/html" })
        response.end("Error 404. Page not found !!")
    }
})

server.listen(6969, "127.0.0.1", () => {
    console.log("API Loading.......")
}) 