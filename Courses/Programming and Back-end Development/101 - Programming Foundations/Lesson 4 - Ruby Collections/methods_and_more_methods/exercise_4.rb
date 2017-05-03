# What is the return value of each_with_object in the following code? Why?
#
# ```
# ['ant', 'bear', 'cat'].each_with_object({}) do |value, hash|
#   hash[value[0]] = value
# end
# ```

##########
# ANSWER #
##########

# {"a"=>"ant", "b"=>"bear", "c"=>"cat"}
#  It returns the object passed in the the method.
# In this case, it's a hash initialized to be empty but on each iteration,
# something is added to the hash which modifies it.