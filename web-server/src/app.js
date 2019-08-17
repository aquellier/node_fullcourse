const express = require('express')
const app = express()

app.get('', (req, res) => {
  res.send('Hello Express!')
})

app.get('/help', (req, res) => {
  res.send('Help page!')
})

app.get('/about', (req, res) => {
  res.send('About!')
})

app.get('/weather', (req, res) => {
  res.send('This is the weather page!')
})
// app.com
// app.com/help
// app.com/about

app.listen(4000, () => {
  console.log('Server is up on port 3000')
