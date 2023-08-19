import chalk from "chalk";

// To display content with different (blue) color
console.log(chalk.blue("Hello"));

// To display content with different (green and red) background color
console.log(chalk.green.inverse("Success"))
console.log(chalk.red.inverse("Failure"))

// We can also give background color with:
console.log(chalk.bgWhite("Background is White"))

// To display different contents with different colors. 
// Like: "Hello" with green color and "World" with red color.
console.log(chalk.green("Hello") + " " + chalk.red("World"))

// To display content in italic font.
console.log(chalk.italic("This is in italic font."))

// To display content with underline.
console.log(chalk.underline("This is underlined text."))
