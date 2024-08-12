function Vehicules() {}


Vehicules.prototype.getType =  function () 
{
  console.log("vehicules")
}

function Car() {}
Car.prototype = Object.create(Vehicules.prototype)
Car.prototype.getType =  function (){
  console.log("car")
}

Car.prototype.start =  function (){
  console.log("car is starting")
}

function Sportcar() {}
Sportcar.prototype = Object.create(Car.prototype)
Sportcar.prototype.getType =  function () {
 console.log("sport car") 
}

const c = new Sportcar()
console.log(c.start())
