/*
Exercise 1
Start out by creating function that will be called when the document's DOMContentLoaded event fires. The rest of your code will be placed within this function to ensure the page is fully loaded before it runs.

Exercise 2
Create an answer number by generating a random number between 1 and 100 inclusive and store it in a variable named answer.

Exercise 3
Add an event listener that will run when the form is submitted. Prevent the form from actually being submitted using preventDefault (otherwise, the page will refresh and we'll lose everything!)

Retrieve the value from the input and convert it to a Number using parseInt. Store this number in a local variable, guess.

Exercise 4
Create a local variable that we will use to store the String for display to the user. Call it message.


Exercise 5
Check to see if the guess is higher than the answer, and if so set the message to say that it is lower than the guess.


Exercise 6
Repeat the same check and message creation for when the guess is lower, or for when it was correctly guessed.


Exercise 7
Change the message on the page to tell the player which it is. Find the message element on the page using querySelector and set its textContent property to the value of message.


Exercise 8
Add an event listener that fires when the "New game" link is clicked.


Exercise 9
In the event listener, change the answer to a new random number from 1 to 100, then change the message on the page back to the request to the player to guess a number.


Exercise 10
In question 9, the paragraph variable's textContent property was assigned. Will this work or not?

Exercise 11
As an added challenge, add the following features: (1) Check that the number passed is a number; if not message the user about it and (2) once the number is guessed disable the button for guessing.
*/


document.addEventListener('DOMContentLoaded', function() {
  var messages = {
    start: 'Guess a number from 1 to 100',
    correct: 'You guessed it! It took you ',
    lower: 'My number is lower than ',
    higher: 'My number is higher than ',
    invalid: 'Please enter a valid number from 1 to 100',
  }

  function getMessage(guess, answer) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
      return messages.invalid;
    } else if (guess === answer) {
      return messages.correct;
    } else if (guess > answer) {
      return messages.lower + guess;
    } else {
      return messages.higher + guess;
    }
  }

  function startNewGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    paragraph.textContent = messages.start;
    guessBtn.disabled = false;
    guessBox.value = '';
    guessCount = 0;
  }

  var answer;
  var message;
  var guessCount;
  var form = document.querySelector('form');
  var paragraph = document.querySelector('p');
  var guessBox = document.getElementById('guess');
  var guessBtn = document.querySelector('[type="submit"]');
  var newGameBtn = document.querySelector('a');

  startNewGame();

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var guess = parseInt(guessBox.value, 10);

    message = getMessage(guess, answer);
    guessCount += 1;

    if (message === messages.correct) {
      guessBtn.disabled = true;
      message += guessCount + ' tries.'
    }

    paragraph.textContent = message;
  });

  newGameBtn.addEventListener('click', startNewGame);
});