# What is the return value of reject in the following code? Why?
#
# ```
# [1, 2, 3].reject do |num|
#   puts num
# end
# ```

##########
# ANSWER #
##########

# [1, 2, 3]
# Reject appends to a new array all selected elements of the original, and returns it.
# Selection is based on the truthiness of the block.
# Will select all elements that is NOT truthy. (falsey)
# Since puts num returns nil, it will select all elements.