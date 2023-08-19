import http from "http"

const server = http.createServer((request, response) => {
    response.end("This is response given to the user on behalf of their request.")
})

server.listen(6969, "127.0.0.1", () => {
    console.log("Listening....")
})