# Write a method that takes a string as argument, and returns true if all parentheses in the string are properly
# balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

# Examples:

# ```
# balanced?('What (is) this?') == true
# balanced?('What is) this?') == false
# balanced?('What (is this?') == false
# balanced?('((What) (is this))?') == true
# balanced?('((What)) (is this))?') == false
# balanced?('Hey!') == true
# balanced?(')Hey!(') == false
# balanced?('What ((is))) up(') == false
# ```

# Note that balanced pairs must each start with a (, not a ).

def balanced?(str)
  return false if str.count('(') != str.count(')')
  
  parentheses = 0

  str.chars.each do |char|
    if char == '('
      parentheses += 1
    elsif char == ')'
      parentheses -= 1
    end

    return false if parentheses < 0
  end

  true
end

puts balanced?('What (is) this?') == true
puts balanced?('What is) this?') == false
puts balanced?('What (is this?') == false
puts balanced?('((What) (is this))?') == true
puts balanced?('((What)) (is this))?') == false
puts balanced?('Hey!') == true
puts balanced?(')Hey!(') == false
puts balanced?('What ((is))) up(') == false