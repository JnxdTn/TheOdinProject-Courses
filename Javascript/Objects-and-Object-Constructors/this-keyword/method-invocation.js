let car = {
    brand: "honda",
    getBrand: function(){
        return this.brand;
    }
}

console.log(car.getBrand());

let cah = car.getBrand;
console.log(`"this" keyword references the global object: ${cah()}`); // undefined

let bike = {
    brand: "Harley Davidson",
}

// bind is a method of the Function.prototype object. 
// bind method creates a new function whose "this" keyword is set to the object that is passed as an argument.
let notCar = car.getBrand.bind(bike); 
console.log(`"this" keyword has been set using the method bind(): ${notCar()}`); 