const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Went wrong')
    resolve([1, 3, 4])
  }, 2000)
})

doWorkPromise.then((result) => {
  console.log('Success', result)
}).catch((error) => {
  console.log('Error', error)
})

// Promise pending for 2 sec
// Then either resolved or rejected
