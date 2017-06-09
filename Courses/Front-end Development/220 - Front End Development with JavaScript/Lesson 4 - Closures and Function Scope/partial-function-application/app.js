/*
Exercise 1

Write a function named greet that takes two arguments and logs a greeting:

> greet("howdy", "Joe");
Howdy, Joe!
> greet("good morning", "Sue");
Good morning, Sue!
*/

function greet(greeting, name) {
  var capitalizedGreeting = greeting[0].toUpperCase() + greeting.substr(1);
  var capitalizedName = name[0].toUpperCase() + name.substr(1);
  console.log(capitalizedGreeting + ', ' + capitalizedName + '!');
}

greet('howdy', 'Joe');
greet('good morning', 'Sue');


/*
Exercise 2

Use the partial function shown above and your solution to problem 1 to create sayHello and sayHi functions that work like this:

> sayHello("Brandon");
Hello, Brandon!
> sayHi("Sarah");
Hi, Sarah!
*/

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

var sayHello = partial(greet, 'hello');
var sayHi = partial(greet, 'hi');

sayHello('Brandon');
sayHi('Sarah');