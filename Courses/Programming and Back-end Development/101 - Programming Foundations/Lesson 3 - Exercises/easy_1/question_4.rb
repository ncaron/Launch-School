##############
# Question 4 #
##############

# The Ruby Array class has several methods for removing items from the array.
# Two of them have very similar names. Let's see how they differ:
#
# ```
# numbers = [1, 2, 3, 4, 5]
# ```
#
# What do the following method calls do (assume we reset numbers to the original array between method calls)?
#
# ```
# numbers.delete_at(1)
# numbers.delete(1)
# ```

############
# Answer 4 #
############

# numbers.delete_at(1) deletes the element at index 1 and returns it, in this case, 2.
# numbers = [1, 3, 4, 5]
# numbers.delete(1) deletes all elements with value 1 and returns the last, in the case, 1.
# numbers = [2, 3, 4, 5]