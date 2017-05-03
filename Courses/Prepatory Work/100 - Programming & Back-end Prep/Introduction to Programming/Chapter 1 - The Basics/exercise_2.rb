number = 2017
thousands_place = number / 1000
hundreds_place = number % 1000 / 100
tens_place = number % 100 / 10
ones_place = number % 10

puts "Number: #{number}"
puts "Thousands Place: #{thousands_place}"
puts "Hundreds Place: #{hundreds_place}"
puts "Tens Place: #{tens_place}"
puts "Ones Place: #{ones_place}"