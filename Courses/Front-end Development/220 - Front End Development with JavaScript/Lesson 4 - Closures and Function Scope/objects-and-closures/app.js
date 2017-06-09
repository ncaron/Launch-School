/*
Exercise 1

Reimplement makeList, so it returns an Object that provides the interface shown above, including add, list, and remove methods.
*/

function makeList() {
  var list = [];

  return {
    add: function(item) {
      var itemIndex = list.indexOf(item);

      if (itemIndex === -1) {
        list.push(item);
        console.log(item + ' added!');
      } else {
        console.log(item + ' already in list.');
      }
    },
    remove: function(item) {
      var itemIndex = list.indexOf(item);

      if (itemIndex === -1) {
        console.log(item + ' not in list.');
      } else {
        list.splice(itemIndex, 1);
        console.log(item + ' removed!');
      }
    },
    list: function() {
      list.forEach(function(item) {
        console.log(item);
      });
    },
  };
}

var list = makeList();

list.add('peas');
list.list();
list.add('corn');
list.list();
list.remove('peas');
list.list();
list.remove('apples');
list.list();
list.add('corn');
list.list();


/*
Exercise 2

Notice that the solution lets us access the array of items through the items property:

> list.items;            // items accessible from outside object
= ["corn"]               // since they are an object property
This was not the case in the single-function implementation:

> list.items;            // items not accessible from outside object
= undefined              // since they are within an closure

Update the implementation from problem 1 so that it retains the use of an object with methods but prevents outside access to the items the object stores internally.
*/

// That is already how it was implemented in solution for exercise 1.