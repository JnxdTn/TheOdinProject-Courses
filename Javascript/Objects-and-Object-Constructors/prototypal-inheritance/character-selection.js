function Hero(name, gender, level){
    this.name = name;
    this.gender = gender;
    this.level = level;
}

function Sorcerer(name, gender, level, weapon){
    Hero.call(this, name, gender, level);
    this.weapon = weapon;
}

function Healer(name, gender, level, spell){
    Hero.call(this, name, gender, level);
    this.spell = spell;
}

// Link prototypes and add prototype methods; Sorcerer and healer constructors now has hero prototype methods
Object.setPrototypeOf(Sorcerer.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.greet = function(){
    return `${this.name} says Hey!`;
}

Sorcerer.prototype.attack = function(){
    return `${this.name} conjured an attack with their ${this.weapon}.`;
};

Healer.prototype.heal = function(){
    return `${this.name} casts ${this.spell}.`;
};

const hero1 = new Sorcerer("Ryj", "female", 1, "Grimoire");
const hero2 = new Healer("Anx", "male", 1, "Heal");

// both hero1 and hero2 can use the method greet due to calling the Object.setPrototypeOf method
// hero1 can attack but cannot heal and vice versa for hero2
console.log(hero1.greet()); 
console.log(hero1.attack());
// console.log(hero1.heal()); // error; hero 1 does not have access to the heal method from Healer prototype
console.log(hero2.greet());
console.log(hero2.heal());
// console.log(hero2.attack()); // error; hero 2 does not have access to the attack method from Sorcerer prototype