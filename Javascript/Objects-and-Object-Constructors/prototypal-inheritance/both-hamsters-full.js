// ---------- Problem ----------
// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // This one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // This one also has it, why? fix please.
// alert( lazy.stomach ); // apple

// ---------- Provide fix to the problem below ----------

let hamster = {
    stomach: [],

    eat(food){ // (*)
        this.stomach.push(food);
    }

    // or this below, (**)
    // eat(food){
        // this.stomach = [food];
    // }
}

let speedy = {
    stomach: [], // (*) , for (**) the stomach property can be omitted
    __proto__: hamster
}

let lazy = {
    // stomach: [], // (*) , for (**) the stomach property can be omitted
    __proto__: hamster
}

speedy.eat("apple"); 
console.log(`Speedy stomach: ${speedy.stomach}`) // apple
console.log(`Lazy stomach: ${lazy.stomach}`) // undefined
