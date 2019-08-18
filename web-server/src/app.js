const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// First: name of the view to render
// Second: Object containing values you want to access
app.get('', (req, res) => {
  res.render('index',{
    title: 'Weather',
    name: 'Antoine Quellier'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Antoine Quellier'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help page',
    name: 'Antoine Quellier',
    helpText: 'We can help you'
  })
})

app.get('/weather', (req, res) => {
  res.render('help', {
    title: 'Help page',
    name: 'Antoine Quellier',
    helpText: 'We can help you'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Antoine Quellier',
    message: 'No help article found'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Antoine Quellier',
    message: 'Page not found'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
