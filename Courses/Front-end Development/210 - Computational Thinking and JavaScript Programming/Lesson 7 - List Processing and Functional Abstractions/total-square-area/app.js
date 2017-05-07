/*
For this exercise, we'll represent rectangles as Arrays with two elements: a height and a width.

Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total
area covered by all the rectangles.

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles); // 141
*/

function totalArea(rectangles) {
  var areas = rectangles.map(function(rectangle) {
    return rectangle[0] * rectangle[1];
  });

  return areas.reduce(function(sum, area) {
    return sum + area;
  });
}


var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));


/*
Now, write a second Function named totalSquareArea. This Function should calculate the total area of a set of
rectangles, just like totalArea. However, it should only include squares in its calculations: it should ignore
rectangles that aren't square.

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalSquareArea(rectangles); // 121
*/

function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function(rectangle) {
    return rectangle[0] === rectangle[1];
  });

  return totalArea(squares);
}

console.log(totalSquareArea(rectangles));