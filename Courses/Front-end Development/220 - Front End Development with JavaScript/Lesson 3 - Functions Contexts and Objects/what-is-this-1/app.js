/*
Exercise 1

What does this point to in the code below?

function whatIsMyContext() {
  return this;
}
*/

// We don't know.


/*
Exercise 2

What does this point to in the code below?

function whatIsMyContext() {
  return this;
}

whatIsMyContext();
*/

// window


/*
Exercise 3

What does this point to in the code below?

function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }
    baz();
  }
  bar();
}

foo();
*/

// window


/*
Exercise 4

What does this point to in the code below?

var obj = {
  count: 2,
  method: function() {
    return this.count;
  }
};

obj.method();
*/

// obj


/*
Exercise 5

What does the following program log to the console?

function foo() {
  console.log(this.a);
}

var a = 2;
foo();
*/

// 2


/*
Exercise 6

What does the following program log to the console?

var a = 1;

function bar() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: bar
};

obj.foo();
*/

// 2


/*
Exercise 7

What does the following code log to the console?

foo = {
  a: 1,
  bar: function() {
    console.log(this.baz());
  },
  baz: function() {
    return this;
  }
};

foo.bar();
var qux = foo.bar;
qux();
*/

// Object {a: 1, bar: function, baz: function}
// TypeError