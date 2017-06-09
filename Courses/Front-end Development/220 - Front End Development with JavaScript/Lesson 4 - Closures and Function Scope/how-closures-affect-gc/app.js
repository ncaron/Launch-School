/*
Exercise 1

In the following code, when can JavaScript garbage collect the values represented by the variables a, b, and c?

var a = 34;

function add(b) {
  a += b;
}

function run() {
  var c = add(4);
}

run();
*/

// a can be garbage collected after run();
// b can be garbage collected after add returns
// c can be garbage collected after run returns


/*
Exercise 2

In the following code, when can JavaScript garbage collect the value "Steve"?

function makeHello(name) {
  return function() {
    console.log("Hello, " + name + "!");
  }
}

var helloSteve = makeHello("Steve");
*/

// Steve can be garbage collected after the program terminates.