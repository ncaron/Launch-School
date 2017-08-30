/*
Exercise 1

Recall that the product edit form didn't work properly in the last assignment. Make changes to the JavaScript to submit the edit form using XMLHttpRequest. Once your code is working, you should see the message You must be logged in to do that. when you try to submit the form. We'll deal with this in the next problem.
*/

store.addEventListener('submit', function(event) {
  var form = event.target;

  event.preventDefault();
  var request = new XMLHttpRequest();

  var data = new FormData(form);

  request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com' + form.getAttribute('action'));
  request.send(data);

  request.addEventListener('load', function(event) {
    store.innerHTML = request.response;
  });
});



/*
Exercise 2

The "You must be logged in to do that" message tells us that the user must provide the proper authentication credentials; that is, they must prove they have the authority to update the product information. Without credentials, anybody in the world can change the product information. One way to authenticate is to provide a special header that contains an authentication token that only an authorized client should know. In a real application, the user would login to a site, which in turn would return a unique token, possible via a cookie. For now, we'll add the header manually with a simple (and insecure) string.

Modify the code you wrote in the previous exercise to add an Authorization header to the XMLHttpRequest before sending it. The header's value should be token AUTH_TOKEN.
*/

store.addEventListener('submit', function(event) {
  var form = event.target;

  event.preventDefault();
  var request = new XMLHttpRequest();

  var data = new FormData(form);

  request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com' + form.getAttribute('action'));
  request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
  request.send(data);

  request.addEventListener('load', function(event) {
    store.innerHTML = request.response;
  });
});