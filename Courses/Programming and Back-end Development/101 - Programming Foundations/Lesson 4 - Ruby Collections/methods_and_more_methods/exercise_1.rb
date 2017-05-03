# What is the return value of the select method below? Why?
#
# ```
# [1, 2, 3].select do |num|
#   num > 5
#   'hi'
# end
#```

##########
# ANSWER #
##########

# [1, 2, 3]
# It returns the original array because it will select all elements from the original
# array based on the truthiness of the return of the block and append it to a new array.
# Since the last statement in the block is 'hi' and always truthy, it will append all
# elements to the new array.