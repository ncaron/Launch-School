# Write a method that takes a string as an argument and returns a new string in
# which every uppercase letter is replaced by its lowercase version, and every
# lowercase letter by its uppercase version. All other characters should be unchanged.

# You may not use String#swapcase; write your own version of this method.

# Example:

# ```
# swapcase('CamelCase') == 'cAMELcASE'
# swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'
# ```

def upcase?(letter)
  ('A'..'Z').include?(letter)
end

def downcase?(letter)
  ('a'..'z').include?(letter)
end

def swapcase(str)
  swapped = str.chars.map do |letter|
              if upcase?(letter)
                letter.downcase
              elsif downcase?(letter)
                letter.upcase
              else
                letter
              end
            end

  swapped.join
end

puts swapcase('CamelCase') == 'cAMELcASE'
puts swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'