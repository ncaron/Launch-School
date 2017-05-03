# Write a method that takes two arguments: the first is the starting number, and the second
# is the ending number. Print out all numbers between the two numbers, except if a number is divisible by 3,
# print "Fizz", if a number is divisible by 5, print "Buzz", and finally if a number is divisible by 3 and 5,
# print "FizzBuzz".

# Example:

# ```
# fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
# ```

def fizzbuzz(current, last)
  loop do
    if current % 3 == 0 && current % 5 == 0
      print 'FizzBuzz'
    elsif current % 3 == 0
      print 'Fizz'
    elsif current % 5 == 0
      print 'Buzz'
    else
      print current
    end

    current += 1
    break if current > last
    print ', '
  end
end

fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz