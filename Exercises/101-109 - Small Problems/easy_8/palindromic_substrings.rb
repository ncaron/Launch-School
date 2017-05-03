# Write a method that returns a list of all substrings of a string that are palindromic.
# That is, each substring must consist of the same sequence of characters forwards as it does backwards.
# The return value should be arranged in the same sequence as the substrings appear in the string.
# Duplicate palindromes should be included multiple times.

# You may (and should) use the substrings method you wrote in the previous exercise.

# For the purposes of this exercise, you should consider all characters and pay attention to case; that is,
#{ }"AbcbA" is a palindrome, but neither "Abcba" nor "Abc-bA" are. In addition, assume that single characters
# are not palindromes.

# Examples:

# ```
# palindromes('abcd') == []
# palindromes('madam') == ['madam', 'ada']
# palindromes('hello-madam-did-madam-goodbye') == [
#   'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
#   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
#   '-madam-', 'madam', 'ada', 'oo'
# ]
# palindromes('knitting cassettes') == [
#   'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
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

def palindromes(str)
  substrings(str).select { |sub| sub == sub.reverse && sub.size > 1 }
end

puts palindromes('abcd') == []
puts palindromes('madam') == ['madam', 'ada']
puts palindromes('hello-madam-did-madam-goodbye') == [
       'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
       'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
       '-madam-', 'madam', 'ada', 'oo'
     ]
puts palindromes('knitting cassettes') == [
       'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
     ]