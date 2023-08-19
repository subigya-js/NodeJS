const express = require("express")
const app = express()

// app.get(route, callbackFunction)
app.get("/", (request, response) => {
    //Send the response to the server
    //Similar to response.end("Hello World") in NodeJS
    response.send("Hello World")
})

//To perform Routing in ExpressJS
app.get("/about", (request, response) => {
    response.send("This is About Page")
})

app.listen(6969, "127.0.0.1", () => {
    console.log("Hello World Printed")
})