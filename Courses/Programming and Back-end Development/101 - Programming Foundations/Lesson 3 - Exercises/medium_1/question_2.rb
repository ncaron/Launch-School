##############
# Question 2 #
##############

# The result of the following statement will be an error:
#
# ```
# puts "the value of 40 + 2 is " + (40 + 2)
# ```
#
# Why is this and what are two possible ways to fix this?

############
# Answer 2 #
############

# It's an error because an integer is being added to the string.
#
# Fix 1
# Convert the integer to a string with to_s.
# puts "the value of 40 + 2 is " + (40 + 2).to_s
#
# Fix 2
# Use string interpolation.
# puts "the value of 40 + 2 is #{(40 + 2)}"

puts "the value of 40 + 2 is " + (40 + 2).to_s
puts "the value of 40 + 2 is #{(40 + 2)}"