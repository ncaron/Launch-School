# What is the return value of map in the following code? Why?
#
# ```
# { a: 'ant', b: 'bear' }.map do |key, value|
#   if value.size > 3
#     value
#   end
# end
# ```

##########
# ANSWER #
##########

# [nil, "bear"]
#
# Map will create an array based on the block given to transform the value.
# It will append value to the array if its size is bigger than 3.
# If its size is not bigger than 3, it will return nil and append nil to the array.