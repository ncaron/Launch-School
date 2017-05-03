puts "Please enter a number between 0 and 100, inclusively"
number = gets.chomp.to_i

if number < 0
  puts "Your number can't be lower 0."
elsif number <= 50
  puts "Your number is between 0 and 50."
elsif number <= 100
  puts "Your number is between 51 and 100."
else
  puts "Your your can't be higher than 100."
end