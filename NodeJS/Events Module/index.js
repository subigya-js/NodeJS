const EventEmitter = require("events")
const event = new EventEmitter()

event.on("sayMyName", () => {
    console.log("subedi.js") 
})

event.emit("sayMyName")