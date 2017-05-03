##############
# Question 3 #
##############

# Replace the word "important" with "urgent" in this string:
#
# ```
# advice = "Few things in life are as important as house training your pet dinosaur."
# ```

############
# Answer 3 #
############

# advice = "Few things in life are as important as house training your pet dinosaur."
# advice.gsub!('important', 'urgent')

puts 'Question 3'
advice = 'Few things in life are as important as house training your pet dinosaur.'
puts "Before Replacement: #{advice}"
advice.gsub!('important', 'urgent')
puts "After Replacement: #{advice}"