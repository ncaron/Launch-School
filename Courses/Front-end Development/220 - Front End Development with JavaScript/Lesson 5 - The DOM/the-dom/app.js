/*
Exercise 1

Use JavaScript in the console to give the heading (the h1 element) a class of heading.
*/

document.getElementById('primary_heading').classList.add('heading');


/*
Exercise 2

Write JavaScript to set the class of the ul element to bulleted.
*/

document.getElementById('list').classList.add('bulleted');


/*
Exercise 3

We will use the onclick Element property in the next two questions. You don't need to know much about onclick at this point, but take a minute to read this link. We'll learn more about onclick in a later course when we talk about event listeners. For now, the point is that you can detect when the user interacts with elements.

Our page has an element that you can't see right now; it's hidden. We should display it when the user clicks the single link on the page. The next click should hide it again. Each click should toggle the hidden element between the visible and hidden states.

Use the Inspector to find the hidden element and determine its ID, then use this ID to set the onclick property to a function that makes the hidden element visible when it's hidden, and hidden when it's visible. You can use getAttribute to set the class to visible or hidden as needed.
*/

document.getElementById('toggle').onclick = function(e) {
  e.preventDefault();
  document.getElementById('notice').classList.toggle('hidden');
};


/*
Exercise 4

Add an onclick event to the element we show and hide above. This time, the function should set the class of the element to hidden. This event will let you hide the visible element by clicking on it.

Inside your function, this points to the current DOM element, which means that you can use this.setAttribute to change its class; you don't have to locate it first with getElementById.
*/

document.getElementById('notice').onclick = function() {
  this.classList.toggle('hidden');
};


/*
Exercise 5

Locate the multiplication paragraph and change the text to the result of the arithmetic problem. Use the innerText property.
*/

document.getElementById('multiplication').innerText = String(13 * 9);


/*
Exercise 6

Set the ID of the body element to styled to apply the rest of the styles from the original file. The body doesn't have an ID, though, so you must locate it by some other means.
*/

document.body.setAttribute('id', 'styled')