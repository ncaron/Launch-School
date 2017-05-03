/*
Write a program to determine a student’s grade based on the average of
three scores you get from the user. Use these rules to compute the grade:

If the average score >= 90 => grade: A
If the average score >= 70 and < 90 => grade: B
If the average score >= 50 and < 70 => grade: C
If the average score < 50 => grade: F
You may assume that all input values are valid positive integers.

Example

// prompts to get the 3 scores
Enter score 1: 90
Enter score 2: 50
Enter score 3: 78

// log to the console
Based on the average of your 3 scores your letter grade is "B".
*/

var score1 = Number(prompt('Enter score 1:'));
var score2 = Number(prompt('Enter score 2:'));
var score3 = Number(prompt('Enter score 3:'));
var average = (score1 + score2 + score3) / 3;
var letter;

if (average >= 90) {
  letter = 'A';
} else if (average >= 70) {
  letter = 'B';
} else if (average >= 50) {
  letter = 'C';
} else {
  letter = 'F';
}

console.log('Based on the average of your 3 scores your letter grade is "' + letter + '".');