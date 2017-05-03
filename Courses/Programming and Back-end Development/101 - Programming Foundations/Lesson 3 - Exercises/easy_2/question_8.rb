##############
# Question 8 #
##############

# Shorten this sentence:
#
# ```
# advice = "Few things in life are as important as house training your pet dinosaur."
# ```
#
# ...remove everything starting from "house".
#
# Review the String#slice! documentation, and use that method to make the return value
# "Few things in life are as important as ". But leave the advice variable as "house training your pet dinosaur.".
#
# As a bonus, what happens if you use the String#slice method instead?

############
# Answer 8 #
############

# advice.slice!(0, advice.index('house'))
#
# slice! will mutate the caller and return what was sliced off.
# slice will return the same as slice! but will not mutate the caller.

puts "slice!"
advice = "Few things in life are as important as house training your pet dinosaur."
puts "Before slice!: #{advice}"
puts "slice! return: #{advice.slice!(0, advice.index('house'))}"
puts "After slice!: #{advice}"

puts
puts "slice"
advice = "Few things in life are as important as house training your pet dinosaur."
puts "Before slice: #{advice}"
puts "slice return: #{advice.slice(0, advice.index('house'))}"
puts "After slice: #{advice}"