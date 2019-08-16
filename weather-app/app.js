const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

geocode('lille', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

forecast('-75.70a88', 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
