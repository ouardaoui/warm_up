let person = {
    name : "ahmed", 
    age : 34 , 
    favoriteColor : "red", 
    sayHey : function() {
        console.log("hi")
    },
    sayHey2(){
        console.log(this.name) // second approch also work 
    }
}

let car = {
    name : "audi", 
    country : "GER"
}

person.sayHey2()
console.log(JSON.stringify(car)) // string notation 


