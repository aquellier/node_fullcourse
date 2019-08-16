const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYXF1ZWxsaWVyIiwiYSI6ImNqemR3bHhoZjA1MnEzaW54a3ptMXY1dHUifQ.z4tQq32MNqCyr0j8pXlfyw`

  request({ url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to location service!', undefined)
    } else if (response.body.features.length === 0) {
      console.log(response.body)
      callback('Unable to find location, try another search...', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode
