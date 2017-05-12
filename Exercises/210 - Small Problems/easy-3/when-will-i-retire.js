/*
Build a program that logs when the user will retire and how many years the user has to work till retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2016. You will retire in 2056.
You have only 40 years of work to go!
*/

var age = Number(prompt('What is your age?'));
var retire = Number(prompt('At what age would you like to retire?'));
var today = new Date();
var year = today.getFullYear();

console.log("It's " + year + ' You will retire in ' + (year + retire - age));
console.log('You only have ' + (retire - age) + ' years of work to go!');