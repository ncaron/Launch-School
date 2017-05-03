# Write a method that takes a string, and returns a new string in which every character is doubled.

# Examples:

# ```
# repeater('Hello') == "HHeelllloo"
# repeater("Good job!") == "GGoooodd  jjoobb!!"
# repeater('') == ''
# ```

def repeater(str)
  double_char = ''

  str.chars.each { |letter| double_char << letter * 2 }

  double_char
end

puts repeater('Hello') == "HHeelllloo"
puts repeater("Good job!") == "GGoooodd  jjoobb!!"
puts repeater('') == ''