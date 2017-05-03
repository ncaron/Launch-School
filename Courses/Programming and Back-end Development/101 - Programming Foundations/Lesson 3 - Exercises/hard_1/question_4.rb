##############
# Question 4 #
##############

# Ben was tasked to write a simple ruby method to determine if an input string is an IP address representing
# dot-separated numbers. e.g. "10.4.5.11". He is not familiar with regular expressions.
# Alyssa supplied Ben with a method called is_an_ip_number? that determines if a string is a valid ip address
# number and asked Ben to use it.
#
# ```
# def dot_separated_ip_address?(input_string)
#   dot_separated_words = input_string.split(".")
#   while dot_separated_words.size > 0 do
#     word = dot_separated_words.pop
#     break unless is_an_ip_number?(word)
#   end
#   return true
# end
# ```
#
# Alyssa reviewed Ben's code and says "It's a good start, but you missed a few things.
# You're not returning a false condition, and you're not handling the case that there are more or fewer
# than 4 components to the IP address (e.g. "4.5.5" or "1.2.3.4.5" should be invalid)."
#
# Help Ben fix his code.

############
# Answer 4 #
############

# If the size is not 4, the ip is invalid so return false.
# while loop should not break, instead return false if it's not an ip number.
# Remove the return true and simply say true at the end because it's the last thing evaluated.
#
# def dot_separated_ip_address?(input_string)
#   dot_separated_words = input_string.split(".")
#   return false unless dot_separated_words.size == 4
#
#   while dot_separated_words.size > 0 do
#     word = dot_separated_words.pop
#     return false unless is_an_ip_number?(word)
#   end
#   true
# end