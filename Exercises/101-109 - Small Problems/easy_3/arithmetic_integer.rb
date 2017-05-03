# Write a program that prompts the user for two positive integers, and then prints the
# results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power.
# Do not worry about validating the input.

puts 'Enter the first number:'
first_number = gets.to_i

puts 'Enter the second number:'
second_number = gets.to_i

puts "#{first_number} + #{second_number} = #{first_number + second_number}"
puts "#{first_number} - #{second_number} = #{first_number - second_number}"
puts "#{first_number} * #{second_number} = #{first_number * second_number}"
puts "#{first_number} / #{second_number} = #{first_number / second_number}"
puts "#{first_number} % #{second_number} = #{first_number % second_number}"
puts "#{first_number} ** #{second_number} = #{first_number ** second_number}"