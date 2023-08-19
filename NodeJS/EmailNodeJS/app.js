const express = require("express")
const app = express();
const sendMail = require("./controllers/sendMail")

app.get("/", (request, response) => {
    response.send("I am a Server")
})

app.get("/sendEmail", sendMail)

const start = async () => {
    try {
        app.listen(5000, () => {
            console.log("I am live in port no. 5000")
        })
    }

    catch (error) {

    }
}

start()