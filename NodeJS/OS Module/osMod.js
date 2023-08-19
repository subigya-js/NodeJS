import os from "os"

console.log(os.arch())

// Free Memory in RAM: "How much RAM is available to use (eg: 2GB)"
const freeMemory = os.freemem()
console.log(`Free memory available in my computer is: ${freeMemory / 1024 / 1024 / 1024}`)


//Total RAM Capacity: "8GB"
const totalMemory = os.totalmem()
console.log(`Total memory of my computer is: ${totalMemory / 1024 / 1024 / 1024}`)


//Host (Device) Name: "DESKTOP-23SXA" => Just an example. But my host name is: "Gaurav"
console.log(os.hostname())

//Platform Name: "win32"
console.log(os.platform())




