##############
# Question 2 #
##############

# Starting with this string:
#
# ```
# munsters_description = "The Munsters are creepy in a good way."
# ```
#
# Convert the string in the following ways (code will be executed on original munsters_description above):
#
# ```
# "The munsters are creepy in a good way."
# "tHE mUNSTERS ARE CREEPY IN A GOOD WAY."
# "the munsters are creepy in a good way."
# "THE MUNSTERS ARE CREEPY IN A GOOD WAY."
# ```

############
# Answer 2 #
############

# munsters_description.capitalize!
# munsters_description.swapcase!
# munsters_description.downcase!
# munsters_description.upcase!
#
# The ! will mutate the caller instead of returning a new string.

munsters_description = "The Munsters are creepy in a good way."
puts "Before capitalize!: #{munsters_description}"
munsters_description.capitalize!
puts "After capitalize!: #{munsters_description}"
puts

munsters_description = "The Munsters are creepy in a good way."
puts "Before swapcase!: #{munsters_description}"
munsters_description.swapcase!
puts "After swapcase!: #{munsters_description}"
puts

munsters_description = "The Munsters are creepy in a good way."
puts "Before downcase!: #{munsters_description}"
munsters_description.downcase!
puts "After downcase!: #{munsters_description}"
puts

munsters_description = "The Munsters are creepy in a good way."
puts "Before upcase!: #{munsters_description}"
munsters_description.upcase!
puts "After upcase!: #{munsters_description}"