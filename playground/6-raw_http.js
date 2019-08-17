const https = require('https')

const url = `https://api.darksky.net/forecast/c5881abafc45c4a8d0746468ed904275/3,50?units=si`
const request = https.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
    console.log(chunk)
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('An error', error)
})

request.end()
