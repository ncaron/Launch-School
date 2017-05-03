def dictionary_sort words
  recursive_dictionary_sort words, []
end

def recursive_dictionary_sort unsorted, sorted
  if unsorted.empty?
    return sorted
  end

  first = unsorted.pop
  not_sorted = []

  unsorted.each do |word|
    if word.downcase < first.downcase
      not_sorted.push(first)
      first = word
    else
      not_sorted.push(word)
    end
  end
  sorted.push(first)

  recursive_dictionary_sort(not_sorted, sorted)
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
  puts "Sorted words: "
  puts dictionary_sort(words)
end