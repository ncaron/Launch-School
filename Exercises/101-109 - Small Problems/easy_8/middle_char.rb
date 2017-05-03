# Write a method that takes a non-empty string argument, and returns the middle character or characters
# of the argument. If the argument has an odd length, you should return exactly one character.
# If the argument has an even length, you should return exactly two characters.

# Examples:

# ```
# center_of('I love ruby') == 'e'
# center_of('Launch School') == ' '
# center_of('Launch') == 'un'
# center_of('Launchschool') == 'hs'
# center_of('x') == 'x'
# ```

def center_of(str)
  middle_char = ''
  middle = str.size / 2

  middle_char << str[middle - 1] if str.size.even?
  middle_char << str[middle]

  middle_char
end

puts center_of('I love ruby') == 'e'
puts center_of('Launch School') == ' '
puts center_of('Launch') == 'un'
puts center_of('Launchschool') == 'hs'
puts center_of('x') == 'x'