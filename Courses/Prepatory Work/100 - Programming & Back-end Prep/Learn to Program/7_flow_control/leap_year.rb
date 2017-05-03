puts "Enter the first year."
first = gets.chomp.to_i

puts "Enter the last year."
last = gets.chomp.to_i

puts
puts "List of leap years:"
while first <= last
  if (first % 4 == 0)
    if (first % 100 == 0 && first % 400 == 0)
      puts first
    elsif first % 100 != 0
      puts first
    end
  end
  first += 1
end
        