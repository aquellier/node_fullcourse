const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0');

// add, remove, read, list

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: () => {
    console.log('Adding a new note');
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => {
    console.log('Remove a note');
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: () => {
    console.log('List notes');
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => {
    console.log('Read a note');
  }
});
console.log(yargs.argv)
