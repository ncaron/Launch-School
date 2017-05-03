puts 'HELLO, SONNY!'

while true
  say = gets.chomp
  if say == 'BYE'
    break
  elsif say != say.upcase
    puts 'HUH?! SPEAK UP, SONNY!'
  else
    year = 1930 + rand(21)
    puts "NO, NOT SINCE #{year}!"
  end
end

puts 'BYE, SONNY!'