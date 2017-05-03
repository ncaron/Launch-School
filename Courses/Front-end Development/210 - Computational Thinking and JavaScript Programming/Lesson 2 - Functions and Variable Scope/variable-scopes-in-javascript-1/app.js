// Please predict the output of the following programs and explain why they output what they do.

/*
Exercise 1

var a = 'outer';

function testScope() {
  var a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);
*/

// ANSWER 1
// outer
// inner
// outer

// REASON 1
// Variable a is initilized to outer on line one.
// It is initialized to inner on line 4 but that is only available to the score of the function testScope.
// On line 8, it logs outer because that is the one available for the current score.
// The call to testScope on line 9 logs inner because the variable a on line 4 shadows the one on line 1.
// Line 10 prints outer again for the same reasons as line 8.


/* -----------------------------------------------------*/


/*
Exercise 2

var a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);
*/

// ANSWER 2
// outer
// inner
// inner

// REASON 2
// Variable a is initialized to outer on line 1.
// The call to console.log(a) on line 8 logs outer.
// The call to testScope on line 9 modifies a, re-assigning it to inner and logs inner.
// Because a has been re-assigned to inner by the call to testScope, the call to console.log on line 10 logs inner.


/* -----------------------------------------------------*/


/*
Exercise 3

var basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket = 'play station';
    console.log(basket);
  }

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();
*/

// ANSWER 3
// empty
// play station
// computer

// REASON 3
// Variable basket is initialized to empty on line 1.
// console.log(basket) on line 8 logs empty.
// The call to shop1 on line 19 re-assigns basket to tv
// The call to shop2 on line 20 re-assigns basket to computer
// The call to shop3 on line 21 shadows basket, creating a new local variable and assigned it to play station and logs it
// console.log(basket) on line 23 logs computer (basket was not modified by a call to shop3)


/* -----------------------------------------------------*/


/*
Exercise 4

function hello() {
  a = 'hello';
}

hello();
console.log(a);
*/

// ANSWER 4
// hello

// REASON 4
// The call to hello on line 5 assigns hello to a, the global variable.
// console.log(a) on line 6 logs the global variable a, hello.


/* -----------------------------------------------------*/


/*
Exercise 5

function hello() {
  var a = 'hello'
}

hello();
console.log(a);
*/

// ANSWER 5
// Reference error

// REASON 5
// Variable a is declared in the function hello, therefore it is not available to the scope of console.log call on line 6


/* -----------------------------------------------------*/


/*
Exercise 6

console.log(a);

var a = 1;
*/

// ANSWER 6
// undefined

// REASON 6
// Because of hoisting, the program looks like:
//
// var a;
// console.log(a);
// a = 1;
//
// And since a is declared but not defined when console.log(a) is invoked, it logs undefined.


/* -----------------------------------------------------*/


/*
Exercise 7

console.log(a);

function hello() {
  a = 1;
}
*/

// ANSWER 7
// Reference Error

// REASON 7
// The function hello which assigns 1 to the global variable a is never invoked, therefore a does not exist.