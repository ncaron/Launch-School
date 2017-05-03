answer = ''

loop do
  puts 'Do you want to print something? (y/n)'
  answer = gets.chomp.downcase
  break if answer == 'y' || answer == 'n'
  puts 'Invalid inputs! Please enter y or n'
end
puts 'something' if answer == 'y'