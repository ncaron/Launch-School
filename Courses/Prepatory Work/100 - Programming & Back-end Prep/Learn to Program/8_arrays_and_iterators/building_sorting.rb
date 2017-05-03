puts "Enter as many words as you like, one per line."
puts "Hit 'enter' on an empty line to stop."
words = []

while true
  word = gets.chomp
  break if word == ''
  words.push(word)
end

if words.empty?
  puts "No words entered."
else
  puts "Sorted words: "
  puts words.sort
end