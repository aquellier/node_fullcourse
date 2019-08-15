const fs = require('fs');
const chalk = require('chalk');

const getNotes = (notes) => {
  return notes;
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  })

  if (duplicateNotes.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green('New note added!'))
  } else {
    console.log(chalk.red('Note title already taken'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => {
    return note.title !== title;
  });
  if (updatedNotes !== notes) {
    saveNotes(updatedNotes);
    console.log(chalk.green('Note was deleted'));
  } else {
    console.log(chalk.red('No note found'));
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
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
