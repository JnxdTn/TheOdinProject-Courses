// ---------- Object Constructors ----------
function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        return `And his name is ${this.name}`;
    }
}

const player1 = new Player('Steve', 'X');
const player2 = new Player('Also Steve', 'O');

console.log(`Object Constructors Output: `);
console.log(player1.sayName());
console.log(player2.sayName());
console.log(``);


// ---------- Exercise 1 ----------
function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.haveRead = haveRead;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${haveRead}`
    }
}

const newBook = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet")
console.log(`Exercise 1 Output: `);
console.log(newBook.info());
console.log(``);

// ---------- Prototype ----------
Object.getPrototypeOf(player1) === Player.prototype;
console.log(`Prototype Output: `)
console.log(`Object.getPrototypeOf(player1) === Player.prototype is equal to`)
console.log(Object.getPrototypeOf(player1) === Player.prototype)
console.log(player1.__proto__ === Player.prototype) // DO NOT USE. This is a non-standard and deprecated version of Object.getPrototype.player1

Player.prototype.sayHello = function(){
    return `Hello ${this.name}`;
}

console.log("player1.sayHello() = " + player1.sayHello());
console.log("player2.sayHello() = " + player2.sayHello());


// ---------- Prototypal Inheritance ----------
function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    return `Hi, I am ${this.name}!!!`
}

Player.prototype.getMarker = function(){
    return `My marker is ${this.marker}.`
}

console.log(`Prototypal Inheritance Output: `);
Object.getPrototypeOf(Player.prototype); // Object.prototype
Object.setPrototypeOf(Player.prototype, Person.prototype); // Player object inherits 'Person" prototype

const player3 = new Player("Bob", "O");

console.log(player3.getMarker()); // getMarker property was made under the Player prototype object
console.log(player3.sayHi()); // sayHi property was made under the Person prototype object but is accessible by the Player Object because of Prototypal Inheritance

// REMEMBER: the use of Object.setPropertyOf() function must be created before creating any objects
// the example above shows this, we first set Object.setPrototypeOf(Player.prototype, Person.prototype) before defining the new object player3. 
// Using Object.setPrototypeOf after objects have already been created can cause performance issues

// DO NOT USE THIS:      Player.prototype = Person.prototype
// this will directly set player to directly refer to person.prototype