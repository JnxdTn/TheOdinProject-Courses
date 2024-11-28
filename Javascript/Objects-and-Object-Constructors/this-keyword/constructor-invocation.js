function Car(brand){
    this.brand = brand;
}

Car.prototype.getBrand = function(){
    return `${this.brand}`
};

let car = new Car("Honda");
console.log(`car.getbrand() = ${car.getBrand()}`);

// the implementaion above provides one potential problem.
// when the constructor is used as a simple function

// let one = Car("bmw");
// console.log(one.getBrand) // TypeError: Cannot read properties of undefined 

// solution to the problem above is to validate the "this" keyword is an instance of the object

function CoolCar(brand){
    if(!(this instanceof CoolCar)){
        throw Error("Must use the 'new' operator to call the function"); // Always use as constructor function
    }

    // the new.target is a meta property introduced on ES6 which allows to detect whether a function
    // is invoked as a simple invocation or a constructor invocation.

    // if(!new.target){
    //     throw Error("Must use the 'new' operator to call the function"); // Always use as constructor function
    // }
    
    this.brand = brand;
}

let yuh = new CoolCar("Toyota");
console.log(yuh.brand);