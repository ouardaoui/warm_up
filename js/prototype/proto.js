const engine = {
  type : "Blink",
  licience : "GNU", 
  status : "Active",
}

function Browser(){}

Browser.prototype = engine;

const b = new Browser()

Browser.prototype.type = "MZL";
console.log(Browser.prototype === b.__proto__)
console.log(engine.type)



 


// protoype for constructor
