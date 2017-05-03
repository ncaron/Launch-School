# Build a program that displays when the user will retire and how many years she has to work till retirement.

puts 'What is your age?'
age = gets.to_i

puts 'At what age would you like to retire?'
retire = gets.to_i

years_left = retire - age
current_year = Time.now.year
retirement_year = current_year + years_left

puts "It's #{current_year}. You will retire in #{retirement_year}."
puts "You have only #{years_left} years of work to go!"