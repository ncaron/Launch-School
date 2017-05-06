/*
Read the code below. Currently, it does not log the result that we want. Can you explain why?

var person = {name: 'Victor'};
var otherPerson = {name: 'Victor'};

console.log(person === otherPerson);  // false; but we want this to be true

If in our code, we want to be able to have the two person variables return true when we do person === otherPerson, what
do we need to do?
*/

// Although the properties have the same name and values, 2 objects and not the same, in order to return true, we must
// set otherPerson = person.

var person = {name: 'Victor'};
var otherPerson = person;

console.log(person === otherPerson);