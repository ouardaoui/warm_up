String.prototype.cap = function () {
  return this[0].toUpperCase() + this.slice(1);
}

const str = "aaaa"

console.log(str.cap())
console.log(str)
