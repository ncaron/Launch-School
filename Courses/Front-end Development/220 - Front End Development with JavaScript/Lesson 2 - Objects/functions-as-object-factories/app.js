/*
> var sedan = makeCar(8);
> sedan.accelerate();
> sedan.speed;
= 8

> var coupe = makeCar(12);
> coupe.accelerate();
> coupe.speed;
= 12
*/


/*
Exercise 1

Write a makeCar method that works as shown above.
*/

function makeCar(rate) {
  return {
    speed: 0,
    rate: rate,
    accelerate: function() {
      this.speed += this.rate;
    }
  };
}


/*
Exercise 2

Use your new definition of makeCar to create a hatchback car whose rate of acceleration is 9 mph/s.
*/

var hatchback = makeCar(9);


/*
Exercise 3

Our application now needs to handle braking to slow down. Extend the code from problem 1 to handle specifying a braking rate for each car. Also, add a method that tells the car to apply the brakes for one second. It should work like this:

> var sedan = makeCar(8, 6);
> sedan.accelerate();
> sedan.speed;
= 8
> sedan.brake();
> sedan.speed;
= 2
> sedan.brake();
> sedan.speed = 0

Notice how the car's speed doesn't go lower than 0.
*/

function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate: accelRate,
    brakeRate: brakeRate,
    accelerate: function() {
      this.speed += this.accelRate;
    },
    brake: function() {
      this.speed -= this.brakeRate;

      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  };
}

var sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
sedan.brake()
console.log(sedan.speed);