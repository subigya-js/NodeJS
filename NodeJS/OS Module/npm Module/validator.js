import validator from "validator"
import chalk from "chalk"

const result = validator.isEmail("subigya.056@gmail.com")

console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result))