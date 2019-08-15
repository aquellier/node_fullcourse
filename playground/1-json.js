const fs = require('fs');
// const book = {
//   title: 'Ego is the ennemy',
//   author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJson)

const dataBuffer = fs.readFileSync('1-json.json', 'utf-8');
const parsedData = JSON.parse(dataBuffer);
parsedData.name = 'Antoine';
parsedData.age = 26;

const newData = JSON.stringify(parsedData);
fs.writeFileSync('1-json.json', newData);

