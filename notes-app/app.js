const chalk = require ('chalk');
const getNotes = require ('./notes.js');

const msg = getNotes('Hello');

console.log(chalk.green.bold.inverse('Success'));
