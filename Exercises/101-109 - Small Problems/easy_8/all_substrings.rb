# Write a method that returns a list of all substrings of a string. The returned list should be
#  ordered by where in the string the substring begins. This means that all substrings that start
# at position 0 should come first, then all substrings that start at position 1, and so on.
# Since multiple substrings will occur at each position, the substrings at a given position should
# be returned in order from shortest to longest.

# You may (and should) use the substrings_at_start method you wrote in the previous exercise:

# Examples:

# ```
# substrings('abcde') == [
#   'a', 'ab', 'abc', 'abcd', 'abcde', 
#   'b', 'bc', 'bcd', 'bcde',
#   'c', 'cd', 'cde',
#   'd', 'de',
#   'e'
# ]
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

def substrings(str)
  substrings = []
  i = 0

  loop do
    substrings << substrings_at_start(str[i, str.size])
    i += 1
    break if i >= str.size
  end

  substrings.flatten
end

puts substrings('abcde') == [
      'a', 'ab', 'abc', 'abcd', 'abcde', 
      'b', 'bc', 'bcd', 'bcde',
      'c', 'cd', 'cde',
      'd', 'de',
      'e'
    ]