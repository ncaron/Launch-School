/*
Exercise 3

Update the code to change the color of the red X to blue if the b key is pressed, green if the g key is pressed, or back to red if the r key is pressed.
*/

var colors = {
  r: 'red',
  g: 'green',
  b: 'blue',
}

document.addEventListener('mousemove', function(event) {
  var x = document.querySelector('.x');

  x.style.left = String(event.clientX) + 'px';
  x.style.top = String(event.clientY) + 'px';
});

document.addEventListener('keypress', function(event) {
  var horizontal = document.querySelector('.horizontal');
  var vertical = document.querySelector('.vertical');
  var key = event.key;
  var color = colors[key];

  if (color) {
    horizontal.style.background = color;
    vertical.style.background = color;
  }
});