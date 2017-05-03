##############
# Question 1 #
##############

# In this hash of people and their age,
#
# ```
# ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
# ```
#
# see if "Spot" is present.
# Bonus: What are two other hash methods that would work just as well for this solution?

############
# Answer 1 #
############

# ages.has_key?('Spot')
#
# Bonus
# ages.include?('Spot')
# ages.member?('Spot')

ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }
puts "has_key?: #{ages.has_key?('Spot')}"
puts "include?: #{ages.include?('Spot')}"
puts "member?: #{ages.member?('Spot')}"