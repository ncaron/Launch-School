/*
In this exercise you will write a program that asks a user for a phrase and gives back the number of characters.
Go over the documentation for string and find an appropriate method to use.

input:

Please write a phrase: walk
// console output
There are 4 characters in "walk".

Please write a phrase: walk, don't run
// console output
There are 15 characters in "walk, don't run".
*/

var phrase = prompt('Please write a phrase: ');
var numCharacters = phrase.length;

console.log('There are ' + numCharacters + ' characters in ' + phrase + '.');


/*
Since the refactored program shouldn't count spaces, you can use the String.prototype.replace() method to return a new
string with all spaces removed from it. Go over the documentation and see how you can use this. The thing to note here
is the first argument passed to replace(). That first argument is a regex pattern.

As an added challenge, further refactor it such that it only counts alphabetic characters.
*/

var only_alpha = phrase.replace(/[^a-z]/ig, '');
numCharacters = only_alpha.length;

console.log('There are ' + numCharacters + ' characters in ' + phrase + '.');