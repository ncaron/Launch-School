##############
# Question 6 #
##############

# Starting with the string:
#
# ```
# famous_words = "seven years ago..."
# ```
#
# show two different ways to put the expected "Four score and " in front of it.

############
# Answer 6 #
############

# 1.
#
# famous_words = 'seven years ago...'
# famous_words = 'Four score and ' << famous_words


puts 'Question 6.1'
famous_words = 'seven years ago...'
puts "Before: #{famous_words}"
famous_words = 'Four score and ' << famous_words
puts "After: #{famous_words}"

# 2.
# 
# famous_words = 'seven years ago...'
# famous_words = 'Four score and ' + famous_words

puts 'Question 6.2'
famous_words = 'seven years ago...'
puts "Before: #{famous_words}"
famous_words = 'Four score and ' + famous_words
puts "After: #{famous_words}"