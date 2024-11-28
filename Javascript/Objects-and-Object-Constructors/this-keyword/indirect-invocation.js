const car = {
    speed: 10,
    type: function(model){
       console.log(`Look at this ${model}`) 
    },
    start: function(){
        console.log(`Start with ${this.speed} km/h`);
    }
}

const aircraft = {
    speed: 20,
    fly: function(){
        console.log(`LOOK MA IM FLYING!`);
    }
}

// apply and call 
// These methods allow us to set the this keyword to a different object, 
// the only difference is that the apply method accepts
// lets try to use the start function for the aircraft

car.type.apply(aircraft, ["Gulf Stream"]); // output: Look at this Gulf Stream
// it basically says "apply the type method from the object car, to the object aircraft"
// the this keyword of the car.type method now references the aircraft object. 

car.type.call(aircraft, "Boeing");

// see their difference? the apply method accepts an array argument while the call accepts a regular argument 
