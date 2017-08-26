/*
Exercise 1

What function can we use to permanently bind a function to a particular execution context?
*/

// bind


/*
Exercise 2
What will the code below log to console?

var obj = {
  message: "JavaScript"
}

function foo() {
  console.log(this.message);
}

foo.bind(obj);
*/

// nothing, bind doesn't invoke the function


/*
Exercise 3

What will the code below output?

var a = 1;
var b = -1;
var obj = {
  a: 2,
  b: 3
};

function foo() {
  return this.a + this.b;
}

var bar = foo.bind(obj);

console.log(foo());
console.log(bar());
*/

// 0
// 5


/*
Exercise 4

What will the code below log to the console?

var positiveMentality = {
  message: "JavaScript makes sense!"
};

var negativeMentality = {
  message: "JavaScript makes no sense!"
};

function foo() {
  console.log(this.message);
}

var bar = foo.bind(positiveMentality);

negativeMentality.logMessage = bar;
negativeMentality.logMessage();
*/

// JavaScript makes sense!


/*
Exercise 5

What will the code below output?

var obj = { a: 'Amazebulous!' };
var otherObj = { a: "That's not a real word!" };

function foo() {
  console.log(this.a);
}

var bar = foo.bind(obj);

bar.call(otherObj);
*/

// Amazebulous!