// setTimeout(() => {
//   console.log('Two seconds ago')
// }, 2000)

// const names = ['Antoine', 'Yasmine', 'Henri']
// const shortnames = names.filter((name) => {
//   return name.length <= 4
// })

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     }

//     callback(data)
//   }, 2000)
// }

// geocode('Paris', (data) => {
//   console.log(data)
// })

const add = (first, second, callback) => {
  setTimeout(() => {
    sum = first + second

    callback(sum);
  }, 2000)
}

add(1, 4, (data) => {
  console.log(data)
})
