// Closures 
function makeAdding(firstNumber){
    // first is scoped within the makeAdding function
    const first = firstNumber;
    return function(secondNumber){
        // second is scoped within the inner function
        const second = secondNumber;
        return `${first} + ${second} = ${first + second}`;
    }
}

const addOneHundred = makeAdding(100);
const addTwentyFour = makeAdding(24);
console.log(addOneHundred(69));
console.log(addTwentyFour(6));

// Closures are a combination of functions and its 
// surrounding environment (lexical environment) in which it
// was declared.

// addOneHundred and addTwentyFour work because the return function 
// is given access to the surrounding environment variables of the 
// parent function (makeAdding) even after the parent function has
// finished executing. By providing an argument to the return function,
// the return function is still able to access the first variable 
// from the parent function.

// The concept of closures aid to solve 2 problems for object constructors:
// 1. Constructors look like normal functions, but they always
//  need a new keyword to function properly. 
// 2. The instanceOf property of instructors is unreliable at times 
// because it has to check the entire prototype chain of the object,
//  which does not help in determining if the object was made by the
// constructor or not.


// Factory Functions
function createUser(name){
    const discordName = `@${name}`;
    return {name, discordName};
}

// compared to a constructor function
// which needs a new keyword to function properly
// BOOOOOOOOOOOOOOOOOO!!!!!
// function User(name){
//     this.name = name;
//     this.discordName = `@${name}`;
// }

const john = createUser("John");
console.log(john.discordName)

// so at this point, where does closure come in to action? 
// all that the factory function does is to return an object
// we will need to extend our createUser function to include private
// functions and variables. 

function createUser2(name){
    const discordName = `@${name}`

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return {name, discordName, getReputation, giveReputation};
}

const kendrick = createUser2("Kendrick");
kendrick.giveReputation();
kendrick.giveReputation();
kendrick.giveReputation();
kendrick.giveReputation();
console.log(kendrick.getReputation());

// In our createUser2 function, our closures, getReputation and
// giveReputation are able to access the reputation variable 
// while being kept private from outside the function createUser2.


// Prototypal inheritance with factory functions 
// lets say that we want to extend the createUser2 function

function createPlayer(name, level){
    // this is object destructuring which is the same as 
    // createUser2(name).getReputation and createUser2(name).giveReputation
    const {giveReputation, getReputation} = createUser2(name);
    const increaseLevel = () => level++;

    return {name, giveReputation, getReputation, increaseLevel};
    // you can extend the object by adding more properties using Object.assign method
    // return Object.assign({}, name, {increaseLevel});
}

const player1 = createPlayer("Jev", 1);
player1.increaseLevel();
player1.increaseLevel();
player1.increaseLevel();
player1.increaseLevel();
player1.giveReputation();
player1.giveReputation();
player1.giveReputation();
console.log(`Player 1 name: ${player1.name}`);
console.log(`Player 1 reputation: ${player1.getReputation()}`);







