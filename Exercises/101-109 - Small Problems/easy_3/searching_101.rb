# Write a program that solicits 6 numbers from the user, then prints a message that describes whether
# or not the 6th number appears amongst the first 5 numbers.

numbers = []

puts 'Enter the 1st number: '
numbers << gets.to_i

puts 'Enter the 2nd number: '
numbers << gets.to_i

puts 'Enter the 3rd number: '
numbers << gets.to_i

puts 'Enter the 4th number: '
numbers << gets.to_i

puts 'Enter the 5th number: '
numbers << gets.to_i

puts 'Enter the last number: '
last = gets.to_i

if numbers.include?(last)
  puts "The number #{last} appears in #{numbers}."
else
  puts "The number #{last} does not appear in #{numbers}."
end