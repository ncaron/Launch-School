/*
Exercise 1

Consider the code below:

var chile = {
  name: "The Republic of Chile",
  continent: "South America",
  getDescription: function() {
    return this.name + " is located in " + this.continent + '.';
  }
}

var canada = {
  name: "Canada",
  continent: "North America",
  getDescription: function() {
    return this.name + " is located in " + this.continent + '.';
  }
}

var southAfrica = {
  name: "The Republic of South Africa",
  continent: "Africa",
  getDescription: function() {
    return this.name + " is located in " + this.continent + '.';
  }
}

Think about what is necessary and unnecessary in this code. Where is there duplication?
*/

// getDescription method id a duplication.


/*
Exercise 2

Given our observations about the code above, implement a factory function for our country objects following the template laid out below:

var chile = makeCountry("The Republic of Chile", "South America");
var canada = makeCountry("Canada", "North America");
var southAfrica = makeCountry("The Republic of South Africa", "Africa");

chile.getDescription(); // "The Republic of Chile is located in South America."
canada.getDescription(); // "Canada is located in North America."
southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."
*/

function makeCountry(name, continent) {
  return {
    name: name,
    continent: continent,
    getDescription: function() {
      return this.name + " is located in " + this.continent + '.';
    }
  }
}

var chile = makeCountry("The Republic of Chile", "South America");
var canada = makeCountry("Canada", "North America");
var southAfrica = makeCountry("The Republic of South Africa", "Africa");

chile.getDescription(); // "The Republic of Chile is located in South America."
canada.getDescription(); // "Canada is located in North America."
southAfrica.getDescription(); // "The Republic of South Africa is located in Africa."


/*
Exercise 3

We've decided that we want to track which countries we've visited, and which we haven't. Alter the factory function 
such that the object it returns includes a property visited with a value of false.
*/

function makeCountry(name, continent) {
  return {
    name: name,
    continent: continent,
    visited: false,
    getDescription: function() {
      return this.name + " is located in " + this.continent + '.';
    }
  }
}


/*
Exercise 4

This situation seems a bit problematic though -- what if we want to add a country we've already visited? Alter the factory function such that it includes an optional new parameter, visited, with a default value of false.
*/

function makeCountry(name, continent, visited) {
  if (visited === undefined) {
    visited = false;
  }

  return {
    name: name,
    continent: continent,
    visited: visited,
    getDescription: function() {
      return this.name + " is located in " + this.continent + '.';
    }
  }
}


/*
Exercise 5

Let's add a method to our country objects that lets us visit them. Implement a method visitCountry that sets the visited property to true.
*/

function makeCountry(name, continent, visited) {
  if (visited === undefined) {
    visited = false;
  }

  return {
    name: name,
    continent: continent,
    visited: visited,
    visitCountry: function() {
      this.visited = true;
    },
    getDescription: function() {
      return this.name + " is located in " + this.continent + '.';
    }
  }
}


/*
Exercise 6

Finally, let's update our getDescription function to reflect the visited data. Assuming that canada.visited is false, your code should look like this:

canada.getDescription(); // "Canada is located in North America. I haven't visited Canada."
canada.visitCountry();
canada.getDescription(); // "Canada is located in North America. I have visited Canada."
*/

function makeCountry(name, continent, visited) {
  if (visited === undefined) {
    visited = false;
  }

  return {
    name: name,
    continent: continent,
    visited: visited,
    visitCountry: function() {
      this.visited = true;
    },
    getDescription: function() {
      return this.name + " is located in " + this.continent + '. I ' + (this.visited ? 'have' : "haven't") + ' visited ' + this.name +'.';
    }
  }
}