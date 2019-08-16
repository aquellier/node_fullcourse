const name = 'Antoine'
const age = 26

const user = {
  name,
  age,
  location: 'Paris'
}

console.log(user)

// Object destructuring

const product = {
  label: 'Red notedbook',
  price: 3,
  stock: 201,
  salePrice: undefined
}

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', product)
