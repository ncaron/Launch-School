loop do
  puts 'Should I stop looping?'
  puts 'Enter "yes" to stop.'
  answer = gets.chomp
  break if answer == 'yes'
end