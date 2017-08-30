/*
Exercise 1

Write out the raw text of the HTTP request the last example above will send to the server.
*/

// POST /books HTTP/1.1
// Host: ls-230-book-catalog.herokuapp.com
// Content-Length: 19
// Content-Type: application/json
//
// {"title": "Programming Ruby", "author": "Dave Thomas"}


/*
Exercsie 2

Write some JavaScript to create a new product by sending a request to the JSON API on our web store. To create a product, make a POST request to https://ls-230-web-store-demo.herokuapp.com/v1/products. You can find out the required parameters by viewing the API documentation.
*/

function createProduct(productData) {
  var json = JSON.stringify(productData);
  var request = new XMLHttpRequest();

  request.open('POST', 'http://ls-230-web-store-demo.herokuapp.com/v1/products');
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

  request.addEventListener('load', function() {
    console.log('This product was added: ' + request.responseText);;
  });

  request.send(json);
}

createProduct({
  name: 'HB pencil',
  sku: 'hbp100',
  price: 50
});