# Using the multiply method from the "Multiplying Two Numbers" problem, write a method that
# computes the square of its argument (the square is the result of multiplying a number by itself).

def multiply(a, b)
  a * b
end

def square(n)
  multiply(n, n)
end

puts square(5) == 25
puts square(-8) == 64