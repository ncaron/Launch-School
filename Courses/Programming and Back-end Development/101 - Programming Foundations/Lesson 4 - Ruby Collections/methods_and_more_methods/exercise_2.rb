# How does count treat the block's return value? How can we find out?
#
# ```
# ['ant', 'bat', 'caterpillar'].count do |str|
#   str.length < 4
# end
# ```

##########
# ANSWER #
##########

# If a block is given, it will count the number of items for which the block is true.
# Read the documentatin to find out.