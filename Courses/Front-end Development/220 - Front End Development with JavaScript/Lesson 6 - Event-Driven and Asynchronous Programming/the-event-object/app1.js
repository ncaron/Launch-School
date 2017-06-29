/*
Exercise 1

Starting with the template below, write JavaScript code so that the red X is moved to wherever the document is clicked.
*/

document.addEventListener('click', function(event) {
  var x = document.querySelector('.x');
  
  x.style.left = String(event.clientX) + 'px';
  x.style.top = String(event.clientY) + 'px';
});