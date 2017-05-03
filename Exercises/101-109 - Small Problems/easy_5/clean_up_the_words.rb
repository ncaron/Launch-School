# Given a string that consists of some words and an assortment of non-alphabetic characters,
# write a method that returns that string with all of the non-alphabetic characters replaced by spaces.
# If one or more non-alphabetic characters occur in a row, you should only have one space in the result
# (the result should never have consecutive spaces).

def cleanup(dirty)
  dirty.gsub(/[^a-z]/i, ' ').squeeze
end

puts cleanup("---what's my +*& line?") == ' what s my line '

# If you originally wrote this method with regular expressions, try writing it without regular expressions.

def cleanup2(dirty)
  clean = dirty.chars.map { |c| ("a".."z").include?(c.downcase) ? c : ' ' }
  clean.join.squeeze
end

puts cleanup2("---what's my +*& line?") == ' what s my line '