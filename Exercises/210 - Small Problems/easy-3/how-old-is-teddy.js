/*
Build a program that randomly generates and logs Teddy's age to the console. Have the age be a random number between 20
and 200 (inclusive).

Example Output

Teddy is 69 years old!
*/

var age = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

console.log('Teddy is ' + age + ' years old!');