##############
# Question 7 #
##############

# In the previous exercise we added Dino to our array like this:
#
# ```
# flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
# flintstones << "Dino"
# ```
#
# We could have used either Array#concat or Array#push to add Dino to the family.
#
# How can we add multiple items to our array? (Dino and Hoppy)

############
# Answer 7 #
############

# flintstones.concat( ['Dino', 'Hoppy'] )

flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)
flintstones.concat( %w(Dino Hoppy) )

p flintstones