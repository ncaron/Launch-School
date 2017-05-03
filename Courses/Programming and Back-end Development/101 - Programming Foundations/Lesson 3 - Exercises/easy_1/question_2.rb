##############
# Question 2 #
##############

# Describe the difference between ! and ? in Ruby.
# And explain what would happen in the following scenarios:

# 1. what is != and where should you use it?
# 2. put ! before something, like !user_name
# 3. put ! after something, like words.uniq!
# 4. put ? before something
# 5. put ? after something
# 6. put !! before something, like !!user_name

############
# Answer 2 #
############

# ! can be used to change the boolean value.
# ? can be used in ternary operations.
# Both can be used to add more meaning to method names.
#
# 1. != means not equal and should be used in conditionals.
# 2. ! before something changes its boolean value. If user_name is truthy, !user_name will be false.
# 3. ! after something usually means that the method is destructive.
# 4. ? before something does nothing except for ternery operations.
# 5. ? after something usually means that the method returns a boolean value.
# 6. !! before something returns its boolean value. If user_name is truthy, !user_name will be false and so !false will be true.