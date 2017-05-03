# What is the block's return value in the following code? Why?
#
# ```
# [1, 2, 3].map do |num|
#   if num > 1
#     puts num
#   else
#     num
#   end
# end
# ```

##########
# ANSWER #
##########

# Block returns: 1, nil, nil
#
# The block will return the last statement's return value.
# On the first iteration 1 is not bigger than one and so the else block is executed,
# returning 1.
# On the other itereations, nil is returned because puts returns nil.