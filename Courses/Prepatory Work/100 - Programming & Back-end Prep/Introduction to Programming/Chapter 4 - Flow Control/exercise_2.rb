def all_caps(words)
  words.length > 10 ? words.upcase : words
end

puts all_caps("hello, world!")
puts all_caps("Oh hey!")