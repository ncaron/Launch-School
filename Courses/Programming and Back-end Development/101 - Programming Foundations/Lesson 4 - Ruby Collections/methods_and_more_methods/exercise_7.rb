# What is the block's return value in the following code? How is it determined?
# Also, what is the return value of any? in this code. What gets output by this code?
#
# ```
# [1, 2, 3].any? do |num|
#   puts num
#   num.odd?
# end
# ```

##########
# ANSWER #
##########

# Block return: true, false, true
# any? return: true
#
# The block's return value is the value of the last statement in the block,
# in this case, num.odd? will return true or false and that is the return of the block.
#
# any? will return true if any of the iteration's block return is truthy.
# It will return false otherwise.