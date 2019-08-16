const request = require('request')

const url = `https://api.darksky.net/forecast/c5881abafc45c4a8d0746468ed904275/37.8267,-122.4233?units=si&lang=fr`
const mapboxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/fdsff.json?access_token=pk.eyJ1IjoiYXF1ZWxsaWVyIiwiYSI6ImNqemR3bHhoZjA1MnEzaW54a3ptMXY1dHUifQ.z4tQq32MNqCyr0j8pXlfyw'

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service')
  } else if (resopnse.body) {
    console.log('Unable to find location')
  } else {
    console.log(response.body.daily.data[0].summary)
    console.log(`Il fait ${response.body.currently.temperature} degrés. La probabilité de pluie est de ${data.currently.precipProbability}%.`)
  }
})

request({ url: mapboxURL, json: true}, (error, response) => {
  if (error) {
    console.log('Unable to connect to location service')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location')
  } else {
    const coordinates = response.body.features[0].center
    console.log(`Latitude: ${coordinates[0]}, Longitude: ${coordinates[1]}`)
  }
})
