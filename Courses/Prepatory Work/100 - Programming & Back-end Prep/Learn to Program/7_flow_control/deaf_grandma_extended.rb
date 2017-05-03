puts 'HELLO, SONNY!'
count = 0

while true
  say = gets.chomp
  if say == 'BYE'
    count += 1
  elsif say != say.upcase
    puts 'HUH?! SPEAK UP, SONNY!'
    count = 0
  else
    year = 1930 + rand(21)
    puts "NO, NOT SINCE #{year}!"
    count = 0
  end
  break if count == 3
end

puts 'BYE, SONNY!'