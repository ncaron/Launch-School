// PROBLEM GROUP 1

/*
Exercise 1

Write a JavaScript Function that returns the p Elements in this DOM represented by this HTML:

<!doctype html>
<html lang="en-US">
  <head>
    <title>On the River</title>
  </head>
  <body>
    <h1>On The River</h1>
    <p>The sun is low</p>
    <p>The waters flow</p>
  </body>
</html>
*/

function findAllParagraphs() {
  var paragraphs = [];
  var nodes = document.body.childNodes;

  nodes.forEach(function(node) {
    if (node instanceof HTMLParagraphElement) {
      paragraphs.push(node);
    }
  });

  return paragraphs;
}

console.log(findAllParagraphs());


/*
Exercise 2

Write a JavaScript Function that adds the CSS class "article-text" to every p tag in this HTML:

<!doctype html>
<html lang="en-US">
  <head>
    <title>On the River</title>
  </head>
  <body>
    <div id="page1">
      <div class="intro">
        <p>The sun is low,</p>
      </div>
      <p>The waters flow,</p>
    </div>
    <div id="page2">
      <div class="intro">
        <p>My boat is dancing to and fro.</p>
      </div>
      <p>The eve is still,</p>
    </div>
    <div id="page3">
      <div class="intro">
        <p>Yet from the hill</p>
      </div>
      <p>The killdeer echoes loud and shrill.</p>
    </div>
  </body>
</html>
*/

function addClassToParagraphs(node) {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add('article-text');
  }

  var nodes = node.childNodes;
  var i;

  for (i = 0; i < nodes.length; i += 1) {
    addClassToParagraphs(nodes[i]);
  }
}

addClassToParagraphs(document.body);


/*
Exercise 3

The solution to the previous problem does everything in one Function. It works, but if we need to perform a similar operation again, we have to write most of the same code again. We can do better by rethinking the problem.

We can think of the problem as having two primary operations: we need to find all p Elements, and we need to add a class to each of those Elements. We can structure our code to do something similar; this makes the code's intent clearer to other developers and increases the reusability of the components.

Using this task breakdown, rewrite the solution to the first problem. The core of your solution should be a Function named getElementsByName that returns an Array of all Elements with a given tag name. You should then use this Function to add the CSS class article-text to each paragraph on the page.
*/

function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

function getElementsByTagName(tagName) {
  var matches = [];

  walk(document.body, function(node) {
    if (node.nodeName.toLowerCase() === tagName) {
      matches.push(node);
    }
  });

  return matches;
}

getElementsByTagName('p').forEach(function(paragraph) {
  paragraph.classList.add('article-text');
});




// PROBLEM GROUP 2

/*
Exercise 1

Update the code we wrote above to use the built-in getElementsByTagName method on document.

The above methods return a collection of Elements, but they return every matching element in the DOM, which often isn't useful. More often, you need to perform an operation on a subset of the matching Elements (say, those in a particular area of the page or those located with a relationship to another Element).
*/

var paragraphs = document.getElementsByTagName('p');
var i;

for (i = 0; i < paragraphs.length; i += 1) {
  paragraphs[i].classList.add('article-text');
}


/*
Exercise 2

Let's make the previous problem more realistic. Instead of adding the class article-text to every paragraph on the page, suppose we want add it to those paragraphs inside a <div class="intro">. How could we go about doing this? Keep in mind that you can call getElementsByClassName and getElementsByTagName on any Element; document is handiest when you need all matching elements from the page.

Update the code from Problem 1 to add the article-text class to paragraphs inside <div class="intro">, and nowhere else.
*/

var intros = document.getElementsByClassName('intro');
var i;
var p;

for (i = 0; i < intros.length; i += 1) {
  var paragraphs = intros[i].getElementsByTagName('p');

  for (p = 0; p < paragraphs.length; p += 1) {
    paragraphs[p].classList.add('article-text');
  }
}