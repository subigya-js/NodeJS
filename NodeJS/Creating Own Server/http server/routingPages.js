import http from "http"
// import url from "url"

const server = http.createServer((request, response) => {
    if (request.url == "/") {
        response.end("<h1>This is Home Page</h1>")
    }

    else if (request.url == "/about") {
        response.end("<h1>This is About Page</h1>")
    }

    else if (request.url == "/contact") {
        response.end("<h1>This is Contact Page</h1>")
    }

    else {
        response.writeHead(404)
        response.end("<h1>Error 404. Page not found</h1>")
    }
})

server.listen(6060, "127.0.0.1", () => {
    console.log("Request Running.....")
}) 