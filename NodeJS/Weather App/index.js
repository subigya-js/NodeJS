const http = require("http")
const fs = require("fs")
var requests = require("requests")

const homeFile = fs.readFileSync("home.html", "utf-8")

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempVal%}", (orgVal.main.temp - 273.15).toFixed(2))

    temperature = temperature.replace("{%tempMin%}", (orgVal.main.temp_min - 273.15).toFixed(2))
    temperature = temperature.replace("{%tempMax%}", (orgVal.main.temp_max - 273.15).toFixed(2))
    temperature = temperature.replace("{%city%}", orgVal.name)
    temperature = temperature.replace("{%country%}", orgVal.sys.country)

    return temperature
}

const server = http.createServer((request, response) => {
    if (request.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=01937cdb3d9d8eeb32650be1aacdf09e")
            .on("data", (chunk) => {
                const objJSON = JSON.parse(chunk)
                // Converting the API into Array
                const arrData = [objJSON]
                const celciusTemp = ((arrData[0].main.temp) - 273.15)

                const realTimeData = arrData.map(val => replaceVal(homeFile, val)).join("")

                response.write(realTimeData)
                // console.log(realTimeData)
            })

            .on("end", (err) => {
                if (err) return console.log("Connection closed due to error", err)

                response.end()
            })
    }
})

server.listen(2000, "127.0.0.1")