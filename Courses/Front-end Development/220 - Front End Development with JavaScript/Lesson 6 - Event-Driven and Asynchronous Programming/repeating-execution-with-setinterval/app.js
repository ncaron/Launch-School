/*
Exercise 1

In what order will the following lines of code execute? Number them to indicate the order of execution.

setTimeout(function() {
  console.log("Once");
}, 1000);
setTimeout(function() {
  console.log("upon");
}, 3000);
setTimeout(function() {
  console.log("a");
}, 2000);
setTimeout(function() {
  console.log("time");
}, 4000);
*/

// setTimeout(function() {       // 1
//   console.log("Once");        // 5
// }, 1000);
// setTimeout(function() {       // 2
//   console.log("upon");        // 7
// }, 3000);
// setTimeout(function() {       // 3
//   console.log("a");           // 6
// }, 2000);
// setTimeout(function() {       // 4
//   console.log("time");        // 8
// }, 4000);


/*
Exercise 2

In what order are the functions in the following code run?

setTimeout(function() {
  setTimeout(function() {
    q();
  }, 15);

  d();

  setTimeout(function() {
    n();
  }, 5)

  z();
}, 10);

setTimeout(function() {
  s();
}, 20);

setTimeout(function() {
  f();
});

g();
*/

// setTimeout(function() {
//   setTimeout(function() {
//     q();                        // 7
//   }, 15);

//   d();                          // 3

//   setTimeout(function() {
//     n();                        // 5
//   }, 5)

//   z();                          // 4
// }, 10);

// setTimeout(function() {
//   s();                          // 6
// }, 20);

// setTimeout(function() {
//   f();                          // 2
// });

// g();                            // 1


/*
Exercise 3

Write a Function, afterNSeconds, that takes two arguments: a callback and a number of seconds to wait. The callback should be run after the specified number of seconds.
*/

function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000);
}


/*
Exercise 4

Write a function, startCounting, that causes a number to be logged to the console every second. Each number should be one larger than the number before it.
*/

var counterId;

function startCounting() {
  var count = 0;

  counterId = setInterval(function() {
    count += 1;
    console.log(count);
    
    if (count === 5) {
      stopCounting();
    }
  }, 1000)
}

startCounting();


/*
Exercise 5

Extend the code from the last problem by adding a stopCounting function that, when called, stops the increasing numbers from being logged to the console.
*/

function stopCounting() {
  clearInterval(counterId);
}