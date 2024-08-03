function func(name) {
  console.log(name)
}

function saymyname(x, name) {
  x(name)
}

function print(name, callback) {
  callback(name)
}

print('abass', function (v) {
  let k = 'hello ' + v
  console.log(k)
})

let sum = (a, b) => a + b

saymyname(func, 'ayoub')

console.log(sum(1.1, 2.1))
