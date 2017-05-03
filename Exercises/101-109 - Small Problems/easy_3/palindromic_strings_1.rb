# Write a method that returns true if the string passed as an argument is a palindrome, false otherwise.
# (A palindrome reads the same forwards and backwards.) Case matters, and all characters should be considered.

def palindrome?(string)
  string == string.reverse
end

puts palindrome?('madam') == true
puts palindrome?('Madam') == false          # (case matters)
puts palindrome?("madam i'm adam") == false # (all characters matter)
puts palindrome?('356653') == true