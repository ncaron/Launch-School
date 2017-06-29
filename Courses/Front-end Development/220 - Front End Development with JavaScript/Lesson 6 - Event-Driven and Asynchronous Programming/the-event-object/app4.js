/*
Exercise 4

Using the following HTML and CSS code, write the JavaScript that is required to add a character-counter that updates as a user types.
*/

function updateCounter() {
  var length = textarea.value.length;
  var remaining = 140 - length;
  var message = String(remaining) + ' characters remaining';
  var invalid = remaining < 0;

  textarea.classList.toggle('invalid', invalid);
  button.disabled = invalid;

  counter.textContent = message;
}

var textarea = document.querySelector('textarea');
var counter = document.querySelector('.counter');
var button = document.querySelector('button');

textarea.addEventListener('keyup', updateCounter);

updateCounter();