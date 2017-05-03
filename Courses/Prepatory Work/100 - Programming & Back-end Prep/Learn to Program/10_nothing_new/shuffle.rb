def shuffle words
  shuffle_words words, []
end

def shuffle_words unshuffled, shuffled
  while unshuffled.length > 0
    random = unshuffled.delete_at(rand(unshuffled.length))
    shuffled.push(random)
  end
  shuffled
end

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
  puts "Shuffled words: "
  puts shuffle(words)
end