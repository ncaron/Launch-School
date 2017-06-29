/*
Exercise 2

Update the code to move the red X as the mouse is moved around the document instead of when it is clicked.
*/

document.addEventListener('mousemove', function(event) {
  var x = document.querySelector('.x');
  
  x.style.left = String(event.clientX) + 'px';
  x.style.top = String(event.clientY) + 'px';
});