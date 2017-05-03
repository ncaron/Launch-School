loop do
  lines = nil
  puts 'How many output lines do you want? Enter a number >= 3 (Q to quit):'
  lines = gets.chomp.downcase
  break if lines == 'q'
  if lines.to_i >= 3
    lines.to_i.times do
      puts 'Launch School is the best!'
    end
  else
    puts "That's not enough lines."
  end
end