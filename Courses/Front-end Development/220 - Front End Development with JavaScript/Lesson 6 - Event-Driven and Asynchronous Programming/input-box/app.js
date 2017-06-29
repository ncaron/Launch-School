/*
Exercise 1
Write Javascript code that adds the class focused to the .text-field element when it is clicked.

Exercise 2
Write JavaScript code that removes the class focused from the .text-field element when the document is clicked.

Exercise 3
When the .text-field element is clicked, create an interval that adds and removes the class cursor from .text-field every 500 milliseconds.

Exercise 4
When the document is clicked, clear the interval that is adding and removing the cursor class.

Exercise 5
When the .text-field is "focused" and a key is pressed on the keyboard, add the String value of the pressed key to the .content element.

Exercise 6
When the Backspace key is pressed, delete the last character from the text with the .content element.
*/

var cursorInterval;
var focusedTextField;

document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('.text-field');

  textField.addEventListener('click', function(event) {
    event.stopPropagation();

    focusedTextField = textField;
    textField.classList.add('focused');

    cursorInterval = setInterval(function() {
      textField.classList.toggle('cursor');
    }, 500);
  });
});

document.addEventListener('keyup', function(event) {
  var contentDiv;

  if (focusedTextField) {
    contentDiv = focusedTextField.querySelector('.content');

    if (event.which === 8) {
      contentDiv.textContent = contentDiv.textContent.substr(0, contentDiv.textContent.length - 1);
    } else if (event.key.length === 1) {
      contentDiv.textContent = contentDiv.textContent + event.key;
    }
  }
});

document.addEventListener('click', function(event) {
  clearInterval(cursorInterval);

  if (focusedTextField) {
    focusedTextField.classList.remove('focused', 'cursor');
    focusedTextField = null;
  }
});