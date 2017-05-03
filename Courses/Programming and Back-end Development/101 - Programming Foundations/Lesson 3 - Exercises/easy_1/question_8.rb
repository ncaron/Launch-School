##############
# Question 8 #
##############

# If we build an array like this:
#
# ```
# flintstones = ["Fred", "Wilma"]
# flintstones << ["Barney", "Betty"]
# flintstones << ["BamBam", "Pebbles"]
# ```
#
# We will end up with this "nested" array:
#
# ```
# ["Fred", "Wilma", ["Barney", "Betty"], ["BamBam", "Pebbles"]]
# ```
#
# Make this into an un-nested array.

############
# Answer 8 #
############

# flintstones.flatten!
# The ! is used to mutate the caller instead of returning a new array.

puts 'Question 8'
flintstones = ["Fred", "Wilma"]
flintstones << ["Barney", "Betty"]
flintstones << ["BamBam", "Pebbles"]
puts "Before flatten!: #{flintstones}"
flintstones.flatten!
puts "After flatten!: #{flintstones}"