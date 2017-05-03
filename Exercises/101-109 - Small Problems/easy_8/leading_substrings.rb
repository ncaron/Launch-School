# Write a method that returns a list of all substrings of a string that start at the beginning
# of the original string. The return value should be arranged in order from shortest to longest substring.

# Examples:

# ```
# substrings_at_start('abc') == ['a', 'ab', 'abc']
# substrings_at_start('a') == ['a']
# substrings_at_start('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']
# ```

def substrings_at_start(str)
  sub_arr = []
  i = 1

  loop do
    sub_arr << str[0, i]
    i += 1
    break if i > str.size
  end

  sub_arr
end

puts substrings_at_start('abc') == ['a', 'ab', 'abc']
puts substrings_at_start('a') == ['a']
puts substrings_at_start('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']