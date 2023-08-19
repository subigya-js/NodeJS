import chalk from "chalk"
import validator from "validator"

const check = validator.isEmail("hello@hi.cnn")

console.log(check ? chalk.bgGreen(check) : chalk.bgGreen(check))