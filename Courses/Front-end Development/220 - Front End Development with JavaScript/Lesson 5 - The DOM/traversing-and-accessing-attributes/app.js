function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

/*
Exercise 1

Use the lastChild and childNodes properties to change the text color to red on the On the River heading and set its font size 48 pixels.
*/

var heading = document.childNodes[1].lastChild.childNodes[1];

heading.style.color = 'red';
heading.style.fontSize = '48px';


/*
Exercise 2

Count and log the paragraphs on the page.
*/

var count = 0;

walk(document, function(node) {
  if (node.nodeName === 'P') {
    count += 1;
  }
});

console.log(count);


/*
Exercise 3

Retrieve the first word from each paragraph on the page and log the entire list.
*/

var words = [];

walk(document, function(node) {
  if (node.nodeName === 'P') {
    var text = node.firstChild.data.trim();
    var firstWord = text.split(' ')[0];

    words.push(firstWord);
  }
});

console.log(words);

/*
Exercise 4

Add the class stanza to each paragraph except the first.
*/

var first = true;

walk(document, function(node) {
  if (node.nodeName === 'P') {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
});