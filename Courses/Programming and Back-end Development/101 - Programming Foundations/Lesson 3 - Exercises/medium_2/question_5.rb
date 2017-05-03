##############
# Question 5 #
##############

# How could the unnecessary duplication in this method be removed?
#
# ```
# def color_valid(color)
#   if color == "blue" || color == "green"
#     true
#   else
#     false
#   end
# end
# ```

############
# Answer 5 #
############

# Because Ruby returns what was last evaluated, everything in this method can be removed
# other than the conditional itself.
#
# def color_valid(color)
#   color == "blue" || color == "green"
# end