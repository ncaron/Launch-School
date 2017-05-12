/*
Write a function that takes a first name, a space, and a last name passed as a single String argument, and returns a string that contains the last name, a comma, a space, and the first name.

Examples

swapName('Joe Roberts') // 'Roberts, Joe'
*/

function swapName(name) {
  var names = name.split(' ');

  return names[1] + ', ' + names[0];
}

console.log(swapName('Joe Roberts'));


/*
What if the person has more than one first name? Refactor the current solution so that it can accommodate this.
*/

function swapName2(name) {
  var names = name.split(' ');

  return names[names.length - 1] + ', ' + names.slice(0, names.length - 1).join(' ');
}

console.log(swapName2('Joe Michael Roberts'));