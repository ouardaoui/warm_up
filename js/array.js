const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

a.forEach((e, i) => {
  console.log(e, i)
})

const b = a.map(e => {
  return e * 3
})

const c = a.filter(e => {
  return e < 5
})

const d = a.find(e => {
  return !(e % 2)
})

const isTrue = a.some(e => {
  //at least one
  return e > 10
})

// every like some but every ele must be valide
const som = a.reduce((acc, e) => {
  return acc + e
}, 0)

console.log(som)
