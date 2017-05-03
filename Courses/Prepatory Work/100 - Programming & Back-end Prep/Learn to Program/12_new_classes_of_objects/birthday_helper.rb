birthdays = {}

File.read('birthdays.txt').each_line do |line|
  birthday_array = line.chomp.split(',', 2)
  birthdays[birthday_array[0].downcase.squeeze(' ')] = birthday_array[1].strip.squeeze(' ')
end

puts "Whose birthday do you want to loop up?"
lookup = gets.chomp.downcase

date = birthdays[lookup]
puts date ? date : "Not in directory."