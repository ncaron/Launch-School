function Vehicle() {
  if (!(this instanceof Vehicle)) {
    return new Vehicle();
  }
  return this;
}

Vehicle.prototype = {
  doors: 4,
  wheels: 4
};

var sedan = new Vehicle();
var coupe = new Vehicle();

coupe.doors = 2;

console.log(sedan.hasOwnProperty('doors'));
console.log(coupe.hasOwnProperty('doors'));

function Coupe() {
  if (!(this instanceof Coupe)) {
    return new Coupe();
  }
  return this;
}

Coupe.prototype = new Vehicle();
Coupe.prototype.doors = 2;
Coupe.prototype = Coupe;

function Motorcycle() {
  if (!(this instanceof Motorcycle)) {
    return new Motorcycle();
  }
  return this;
}

Motorcycle.prototype = new Vehicle();
Motorcycle.prototype.doors = 0;
Motorcycle.prototype.wheels = 2;
Motorcycle.prototype = Motorcycle;

var crx = new Coupe();
var monster = new Motorcycle();

console.log(crx);
console.log(monster);

console.log(crx instanceof Coupe);
console.log(crx instanceof Vehicle);
console.log(crx instanceof Motorcycle);

function Sedan() {}

Sedan.prototype = Object.create(Vehicle.prototype);

var lesabre = new Sedan();

console.log(lesabre instanceof Sedan);
console.log(lesabre instanceof Vehicle);