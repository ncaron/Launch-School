def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end

first = nil
second = nil

loop do
  puts 'Please enter a positive or negative integer:'
  first_input = gets.chomp
  puts 'Please enter a positive or negative integer:'
  second_input = gets.chomp

  if valid_number?(first_input) && valid_number?(second_input)
    first = first_input.to_i
    second = second_input.to_i
    break if first.positive? && second.negative? || first.negative? && second.positive?
    puts 'Sorry. One integer must be positive, one must be negative.'
  else
    puts 'Invalid input. Only non-zero integers are allowed.'
  end
end

puts "#{first} + #{second} = #{first + second}"