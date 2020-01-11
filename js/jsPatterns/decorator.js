function Animal(name) {
  this.printName = () => {
    console.log("My name is " + name);
  };
}

function Dec(animal) {
  this._animal = animal;
}
Dec.prototype = Object.create(Animal.prototype);
Dec.prototype.constructor = Dec;

function RunDec(animal) {
  Dec.call(this, animal);
  this._animal = animal;
  this.printName = this._animal.printName;
  this.jump = () => console.log("Lol");
  this.run = function() {
    console.log("I'm run");
  };
}
RunDec.prototype = Object.create(Dec.prototype);
RunDec.prototype.constructor = RunDec;

function JumpDec(animal) {
  Dec.call(this, animal);
  this._animal = animal;
  this.printName = this._animal.printName;
  this.jump = function() {
    console.log("I'm jump");
  };
}
JumpDec.prototype = Object.create(Dec.prototype);
JumpDec.prototype.constructor = JumpDec;

const dog = new RunDec(new Animal("Lu"));
const cat = new RunDec(new JumpDec(new Animal("Luce")));

dog.printName();
dog.run();
console.log("***---***");
cat.printName();
cat.run();
cat.jump();
