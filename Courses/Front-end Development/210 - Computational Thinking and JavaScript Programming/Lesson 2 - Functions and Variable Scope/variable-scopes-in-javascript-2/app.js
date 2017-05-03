/*
Exercise 1

function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}
say();
*/

// ANSWER 1
// undefined

// REASON 1
// var a is hoisted to the top of the function say but never declared because the if statement never evaluates to true.


/* -----------------------------------------------------*/


/*
Exercise 2

function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);
*/

// ANSWER 2
// hello
// Reference Error

// REASON 2
// The call to hello on function 10 hoists var a to the top of the function.
// hello is assigned to the variable a on line 2.
// The call to console.log(a) on line 3 logs hello.
// The if block never executes so var a is not changed.
// Because the variable a is local to the function hello, it does not exist when the call to console.log is made on line 11.


/* -----------------------------------------------------*/


/*
Exercise 3

var a = 'hello';

for (var i = 0; i < 5; i++) {
  var a = i;
}

console.log(a);
*/

// ANSWER 3
// 4

// REASON 3
// The loop modifies the variable a until it exits, the final value is 4.


/* -----------------------------------------------------*/


/*
Exercise 4

var a = 1;

function foo() {
  a = 2;
  function bar() {
    a = 3;
    return 4;
  }

  return bar();
}

console.log(foo());
console.log(a);
*/

// ANSWER 4
// 4
// 3

// REASON 4
// var a is initialized to 1.
// The first call to console.log also calls foo and logs what it returns. (4)
// After foo is called, a is changed to 2, then bar is called which changed a to 3 an returns 4 (Which is what foo returns)
// The second call to console.log logs 3 because that is not the value of a.


/* -----------------------------------------------------*/


/*
Exercise 5

a = 'global'

function checkScope() {
  var a = 'local';
  function nested() {
    var a = 'nested';
    function supernested() {
      a = 'supernested';
      return a;
    }

    return supernested();
  }

  return nested();
}

console.log(checkScope());
console.log(a);
*/

// ANSWER 5
// supernested
// global

// REASON 5
// Global variable a is initialized to global on line 1.
// The call to console.log on line 18 logs the return value of checkScope.
// var a is initialized to local inside of checkScope, any further modifications to a in checkScope and sub functions
// will modify the local, not global.
// checkScope returns the return value of the call to nested on line 15.
// var a is initialized to nested inside of nested, any further modifications to a in nested and sub functions will
// modify the variable local to nested, not global or the variable local to checkScope.
// nested returns the return value of supernested.
// The variable a local to nested is changed to supernested.
// supernested returns a (supernested)
// The first call to console.log will log supernested.
// The second call will log global because the global variable is never modified.


/* -----------------------------------------------------*/


/*
Exercise 6

var a = 'outer';
var b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}
*/

// ANSWER 6
// outer
// outer
// outer
// inner

// REASON 6
// The function arguments are local to the function. So the changed to foo has no effect on a.


/* -----------------------------------------------------*/


/*
Exercise 7

var total = 50;
var increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);
*/

// ANSWER 7
// 50
// 60
// 15

// REASON 7
// The call to console.log on line 8 logs 50.
// The call to incrementBy on line 9 increments total(and modifies the global varaible) by the argument, 10.
// Total is not equal to 60 and the call to console.log on line 10 logs 60.
// increment is never modified and therefore, the call to console.log on line 11 logs 15.


/* -----------------------------------------------------*/


/*
Exercise 8

var a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function() {
  a = 'inner';
}
*/

// ANSWER 8
// outer
// Type Error

// REASON 8
// The first call to console.log will log outer.
// The second will be a type error because of hoisting.
// var setScope is hoisted to the top but never defined before the call to console.log