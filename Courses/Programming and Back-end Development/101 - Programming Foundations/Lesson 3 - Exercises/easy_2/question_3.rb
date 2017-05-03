##############
# Question 3 #
##############

# We have most of the Munster family in our age hash:
#
# ```
# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10 }
# ```
#
# add ages for Marilyn and Spot to the existing hash
#
# ```
# additional_ages = { "Marilyn" => 22, "Spot" => 237 }
# ```

############
# Answer 3 #
############

# ages.merge!(additional_ages)
#
# The ! will mutate the caller instead of returning a new hash.

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10 }
additional_ages = { "Marilyn" => 22, "Spot" => 237 }

puts "Before merge!: #{ages}"
ages.merge!(additional_ages)
puts "After merge!: #{ages}"