##############
# Question 4 #
##############

# See if the name "Dino" appears in the string below:
#
# ```
# advice = "Few things in life are as important as house training your pet dinosaur."
# ```

############
# Answer 4 #
############

# advice.include?('Dino')

advice = "Few things in life are as important as house training your pet dinosaur."

puts "Dino is in the string: #{advice.include?('Dino')}"