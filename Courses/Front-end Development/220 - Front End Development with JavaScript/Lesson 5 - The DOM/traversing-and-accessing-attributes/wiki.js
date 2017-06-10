function walk(node, callback) {
  callback(node);

  for (var i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

/*
Exercise 5

Count the images on the page, then count the PNG images. Log both results.
*/

var imgCount = 0;
var pngCount = 0;

walk(document, function(node) {
  if (node.nodeName === 'IMG') {
    imgCount += 1;

    if (node.src.match(/png$/)) {
      pngCount += 1;
    }
  }
});

console.log(imgCount);
console.log(pngCount);


/*
Exercise 6

Change the link color to red for every link on the page.
*/

walk(document, function(node) {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
});