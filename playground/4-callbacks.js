// const add = (first, second, callback) => {
//   setTimeout(() => {
//     sum = first + second

//     callback(sum);
//   }, 2000)
// }

// add(1, 4, (data) => {
//   console.log(data)
// })

const doWorkCallBack = (callback) => {
  setTimeout(() => {
    // callback('This is error', undefined)
    callback(undefined, 'This is success')
  }, 2000)
}

doWorkCallBack((error, result) => {
  if(error) {
    return console.log(error)
  }

  console.log(result)
})
