/*
Exercise 1

Create a makeCounterLogger function that takes a number as an argument and returns a function. When we invoke the returned function with a second number, it should count up or down from the first number to the second number, logging each number to the console:

> var countlog = makeCounterLogger(5);
> countlog(8);
5
6
7
8
> countlog(2);
5
4
3
2
*/

function makeCounterLogger(number) {
  return function(limit) {
    var i;

    if (number <= limit) {
      for (i = number; i <= limit; i += 1) {
        console.log(i);
      }
    } else {
      for (i = number; i >= limit; i -= 1) {
        console.log(i);
      }
    }
  }
}

var countlog = makeCounterLogger(5);

countlog(8);
countlog(2);


/*
Exercise 2

We'll build a simple todo list program using the techniques we've seen in this assignment. Write a makeList function that returns a new function that implements a todo list. The returned function should have the following behavior:

When called with an argument that is not already on the list, it adds that argument to the list.
When called with an argument that is already on the list, it removes the element from the list.
When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.
> var list = makeList();
> list();
The list is empty.
> list("make breakfast");
make breakfast added!
> list("read book");
read book added!
> list();
make breakfast
read book
> list('make breakfast');
make breakfast removed!
> list();
read book
*/

function makeList() {
  var list = [];
  
  return function(item) {
    var itemIndex = list.indexOf(item);

    if (item === undefined) {
      if (list.length === 0) {
        console.log('The list is empty.');
      } else {
        list.forEach(function(item) {
          console.log(item);
        });
      }
    } else if (itemIndex === -1) {
      list.push(item);
      console.log(item + ' added!');
    } else {
      list.splice(itemIndex, 1);
      console.log(item + ' removed!');
    }
  }
}

var list = makeList();

list();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();