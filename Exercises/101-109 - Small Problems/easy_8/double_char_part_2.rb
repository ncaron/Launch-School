# Write a method that takes a string, and returns a new string in which every consonant character is doubled.
# Vowels (a,e,i,o,u), digits, punctuation, and whitespace should not be doubled.

# Examples:

# ```
# double_consonants('String') == "SSttrrinngg"
# double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
# double_consonants("July 4th") == "JJullyy 4tthh"
# double_consonants('') == ""
# ```

CONSONANTS = 'bcdfghjklmnpqrstvwxyz'

def double_consonants(str)
  double_consonants = ''

  str.chars.each do |letter|
    if CONSONANTS.include?(letter.downcase)
      double_consonants << letter * 2
    else
      double_consonants << letter
    end
  end

  double_consonants
end

puts double_consonants('String') == "SSttrrinngg"
puts double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
puts double_consonants("July 4th") == "JJullyy 4tthh"
puts double_consonants('') == ""