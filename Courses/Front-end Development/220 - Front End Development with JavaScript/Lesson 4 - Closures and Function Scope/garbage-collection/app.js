/*
Exercise 1

Is JavaScript a garbage-collected language, and if so, what does this entail?
*/

// Yes, it means that we don't need to allocate and free memory, the language does it for us.

/*
Exercise 2

Consider the code below:

var myNum = 1;

function foo() {
  var myStr = "A string";
  // what is eligible for GC here?
}

foo();

// what is eligible for GC here?

// more code

Are either of the values 1 or "A string" eligible for garbage collection on line 5? What about on line 10?
*/

// 5: neither
// 10: "A string"


/*
Exercise 3

In the code below, is the value referenced by outerFoo eligible for garbage collection on line 10?

var outerFoo;

function bar() {
  var innerFoo = 0;
  outerFoo = innerFoo;
}

bar();

// can outerFoo's 0 be garbage collected here?

// more code
*/

// no, because it is global, it will be eligible when the program finishes.


/*
Exercise 4

Consider the code below:

function makeEvenCounter() {
  var index = 0;
  return function() {
    return index += 2;
  }
}

var evenCounter = makeEvenCounter();

// is 0 eligible for GC here?

// more code

Is 0 eligible for garbage collection on line 10?
*/

// No, because it is still referenced by the closure


/*
Exercise 5

Consider the script below:

var bash = "Some val";

Will the value "Some val" ever be eligible for garbage collection?
*/

// Yes, at the end of the program.