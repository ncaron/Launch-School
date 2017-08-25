/*
Exercise 1

What will the code below output to the terminal?


var message = "Hello from the global scope!";

function func(message) {
  message = "Hello from the function scope!";
  console.log(message);
}

func();
console.log(message);
*/

// Hello from the function scope!
// Hello from the global scope!


/*
Exercise 2

What will the code below log to the console? What does this output demonstrate in relation to the output of problem one?

var myObj = { message: "Greetings from the global scope!" };

function func(obj) {
  obj.message = "Greetings from the function scope!";
  console.log(obj.message);
}

func(myObj);

console.log(myObj.message);
*/

// Greetings from the function scope!
// Greetings from the function scope!
// It demonstrates that objects can be mutated


/*
Exercise 3

What will the code below log to the console?

var message = "Hello from the global scope!";

function func() {
  message = "Hello from the function scope!";
  console.log(message);
}

func();
console.log(message);
*/

// Hello from the function scope!
// Hello from the function scope!


/*
Exercise 4

What will the code below log to the console?

var a = 10;
var obj = {
  a: a
}

var newObj = obj;
newObj.a += 10;

console.log(obj.a === a);
console.log(newObj === obj);
*/

// false
// true


/*
Exercise 5

var animal = {
  name: "Pumbaa",
  species: "Phacochoerus africanus"
};

var menagerie = {
  warthog: animal
};

animal = {
  name: "Timom",
  species: "Suricata suricatta"
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true
*/

// Animal has been reassigned on line 10 and no longer references the same object.