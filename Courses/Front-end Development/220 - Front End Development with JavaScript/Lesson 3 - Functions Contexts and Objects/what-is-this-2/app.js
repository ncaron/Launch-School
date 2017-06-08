/*
Exercise 1

What does this point to in the code below, and what does it return?

var myObject = {
  count: 1,
  myChildObject: {
    myMethod: function() {
      return this.count;
    }
  }
};

myObject.myChildObject.myMethod();
*/

// myChildObject
// undefined

/*
Exercise 2

In the previous problem, how would you change the context, or the value of this, to be the parent myObject?
*/

// myObject.myChildObject.myMethod.call(myObject);
// OR
// myObject.myChildObject.myMethod.apply(myObject);


/*
Exercise 3

What does the following code log to the console?

var person = {
  firstName: "Peter",
  lastName: "Parker",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName +
                " is the Amazing Spiderman!");
  }
};

var whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();
*/

// Peter Parker is the Amazing Spiderman!


/*
Exercise 4

What does the following code log to the console?

var a = 1;
var obj = {
  a: 2,
  func: function() {
    console.log(this.a);
  }
};

obj.func();
obj.func.call();
obj.func.call(this);
obj.func(obj);

var obj2 = { a: 3 };
obj.func.call(obj2);
*/

// 2
// 1
// 1
// 2
// 3


/*
Exercise 5

What does the following code log to the console?

var a = 1;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

var foo = new Foo();

foo.bar();
Foo();

var obj = {};
Foo.call(obj);
obj.bar();

console.log(this.a);
*/

// 2
// 2
// 2
// 2
// 2
// 2


/*
Exercise 6

What does the following code log to the console?

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + this.tax - specialDiscount();
  }
};

console.log(computer.total());
*/

// NaN
// Remove this from tax, create var self = this and use self instead of this


/*
Exerise 7

What does the following code log to the console?

var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  circumference: function() {
    return 2 * (this.width + this.height);
  }
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.circumference = RECTANGLE.circumference();
}

var rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.circumference);
*/

// NaN
// NaN
// To fix, we can use call or apply in the Rectangle function for this.area and this.circumference
// this.area = RECTANGLE.area.apply(this);
// this.circumference = RECTANGLE.circumference.apply(this);