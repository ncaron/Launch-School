##############
# Question 9 #
##############

# Given the hash below
#
# ```
# flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3, "BamBam" => 4, "Pebbles" => 5 }
# ```
#
# Turn this into an array containing only two elements: Barney's name and Barney's number

############
# Answer 9 #
############

# flintstones.assoc('Barney')
# assoc will search the hash for the key passed in and return the key/value pair in array form, nil if it doesn't exist.

puts 'Question 9'
flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3, "BamBam" => 4, "Pebbles" => 5 }
p flintstones.assoc('Barney')