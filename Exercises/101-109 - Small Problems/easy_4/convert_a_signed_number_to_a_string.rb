# In the previous exercise, you developed a method that converts non-negative numbers to strings.
# In this exercise, you're going to extend that method by adding the ability to represent negative numbers as well.

# Write a method that takes an integer, and converts it to a string representation.

# You may not use any of the standard conversion methods available in Ruby, such as Integer#to_s, String(), Kernel#format, etc.
# You may, however, use integer_to_string from the previous exercise.

DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

def integer_to_string(number)
  string = ''
  loop do
    digit = number % 10
    number /= 10
    string.prepend(DIGITS[digit])
    break if number == 0
  end
  string
end

def signed_integer_to_string(number)
  if number < 0
    negative = true
    number *= -1
  end
  string = integer_to_string(number)
  string.prepend('-') if negative
  string.prepend('+') if !negative and number != 0
  string
end

puts signed_integer_to_string(4321) == '+4321'
puts signed_integer_to_string(-123) == '-123'
puts signed_integer_to_string(0) == '0'