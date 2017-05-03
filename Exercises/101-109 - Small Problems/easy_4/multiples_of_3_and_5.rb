# Write a method that searches for all multiples of 3 or 5 that lie between 1 and some other number,
# and then computes the sum of those multiples. For instance, if the supplied number is 20,
# the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

# You may assume that the number passed in is an integer greater than 1.

def multisum(number)
  sum = 0

  1.upto(number) { |i| sum += i if i % 3 == 0 || i % 5 == 0 }
  sum
end

puts multisum(3) == 3
puts multisum(5) == 8
puts multisum(10) == 33
puts multisum(1000) == 234168

# Investigate Enumerable.inject (also known as Enumerable.reduce), How might this method be useful
# in solving this problem? (Note that Enumerable methods are available when working with Arrays.)
# Try writing such a solution. Which is clearer? Which is more succint?

def multisum2(number)
  1.upto(number).select { |num| num % 3 == 0 || num % 5 == 0 }.reduce(:+)
end

puts multisum2(3) == 3
puts multisum2(5) == 8
puts multisum2(10) == 33
puts multisum2(1000) == 234168