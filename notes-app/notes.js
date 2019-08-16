const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green('New note added!'))
  } else {
    console.log(chalk.red('Note title already taken'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);

  if (updatedNotes !== notes) {
    saveNotes(updatedNotes);
    console.log(chalk.green('Note was deleted'));
  } else {
    console.log(chalk.red('No note found'));
  }
}

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue('Your notes:'))
  notes.forEach((note) => {
    console.log(`${chalk.blue('Title:')} ${note.title}, Body: ${note.body}`);
  })
}

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  debugger

  if(note) {
    console.log(`${chalk.bold.blue(note.title + ':')} ${note.body}`);
  } else {
    console.log(chalk.red('No note was found with this title'));
  }
}

const loadNotes = () => {
  try {
    const data = fs.readFileSync('notes.json', 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}
// export default getNotes;
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
