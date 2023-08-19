import path from "path"

// To get the name of particular directory of given path: "C:/Users/subig/OneDrive/Desktop"
console.log(path.dirname("C:/Users/subig/OneDrive/Desktop/NodeJS"))

// To get the extension name of the proper file: ".js"
console.log(path.extname("C:/Users/subig/OneDrive/Desktop/NodeJS/OS Module/pathMod.js"))

// To get the name of particular file: "pathMod.js"
console.log(path.basename("C:/Users/subig/OneDrive/Desktop/NodeJS/OS Module/pathMod.js"))

// To get all the above information in single frame:
//   {
//     root: 'C:/',
//     dir: 'C:/Users/subig/OneDrive/Desktop/NodeJS/OS Module',
//     base: 'pathMod.js',
//     ext: '.js',
//     name: 'pathMod'
//   }
console.log(path.parse("C:/Users/subig/OneDrive/Desktop/NodeJS/OS Module/pathMod.js"))


// To get only name of the file: "pathMod"
const pathName = path.parse("C:/Users/subig/OneDrive/Desktop/NodeJS/OS Module/pathMod.js")
console.log(pathName.name)

// To get only basename of the file: "pathMod.js"
console.log(pathName.base)

// and so on........