# Write a program that asks the user to enter an integer greater than 0,
# then asks if the user wants to determine the sum or product of all numbers between 1 and the entered integer.

def sum(number)
  sum = 0

  while number != 0
    sum += number
    number -= 1
  end

  sum
end

def product(number)
  product = 1

  while number != 0
    product *= number
    number -= 1
  end

  product
end

puts 'Please enter an integer greater than 0:'

number = ''
loop do
  number = gets.to_i
  break if number > 0
  puts 'Number must be greater than 0.'
end

puts "Enter 's' to computer the sum, 'p' to compute the product."

choice = ''
loop do
  choice = gets.chomp
  break if choice == 's' || choice == 'p'
  puts "Invalid choice. Must be 's' or 'p'."
end

if choice == 's'
  sum = sum(number)
  puts "The sum of the integers between 1 and #{number} is #{sum}."
else
  product = product(number)
  puts "The product of the integers between 1 and #{number} is #{product}."
end