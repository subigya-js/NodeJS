import fs from "fs"

const bioData = {
    name: "Gaurav Subedi",
    age: 21,
    organization: "Jain Universtiy"
}

const jsonData = JSON.stringify(bioData)

fs.writeFile("read.txt", jsonData, (error) => {
    console.log("File Created and write operation applied succesfully.")
})

fs.readFile("read.txt", "utf-8", (err, data) => {
    const orgData = JSON.parse(data)
    console.log(data)
    console.log(orgData)
})
