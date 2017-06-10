/*
Exercise 1

Write some JavaScript code to retrieve a word count for each h2 heading on the page.
*/

var h2s = document.querySelectorAll('h2').length;
console.log(h2s);


/*
Exercise 2

The page has a table of contents with the title "Contents" and links to the different content sections on ("Naming and etymology," "Taxonomy and evolution," etc.).

Use three different DOM methods to retrieve a reference to the div element that contained the table of contents.
*/

console.log(document.getElementById('toc'));
console.log(document.querySelector('#toc'));
console.log(document.querySelectorAll('.toc')[0]);


/*
Exercise 3

Write some JavaScript code to change the color for every other link in the table of contents green.
*/

var tocLinks = document.querySelectorAll('.toc a');
var i;

for (i = 0; i < tocLinks.length; i += 1) {
  if (i % 2 === 1) {
    tocLinks[i].style.color = 'green';
  }
}


/*
Exercise 4

Write some JavaScript code to retrieve the text of every thumbnail caption on the page.
*/

var captions = [];
var nodes = document.querySelectorAll('.thumbcaption');
var i;

for (i = 0; i < nodes.length; i += 1) {
  captions.push(nodes[i].textContent.trim());
}

console.log(captions);


/*
Exercise 5

You can think of the scientific classification of an animal as a series of key-value pairs. Here, the keys are taxonomic ranks (Domain, Kingdom, Phylum, Class, Order, Family, Genus, and Species). The values are the specific groups within each rank to which the animal belongs.

Write a JavaScript function that extracts this information from the web page and returns an Object with the ranks as keys and the specific groups as values.
*/

var keys = ['Kingdom', 'Phylum', 'Class', 'Order', 'Suborder', 'Family', 'Genus', 'Species'];
var classification = {};

var info = document.querySelectorAll('.infobox td');
var infoClass;
var i;

for (i = 0; i < info.length; i += 1) {
  infoClass = info[i].textContent.replace(':', '');

  if (keys.indexOf(infoClass) !== -1) {
    classification[infoClass] = info[i].nextElementSibling.textContent;
  }
}

console.log(classification);