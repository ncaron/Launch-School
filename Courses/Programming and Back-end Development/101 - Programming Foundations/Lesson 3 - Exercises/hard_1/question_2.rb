##############
# Question 2 #
##############

# What is the result of the last line in the code below?
#
# ```
# greetings = { a: 'hi' }
# informal_greeting = greetings[:a]
# informal_greeting << ' there'
#
# puts informal_greeting  #  => "hi there"
# puts greetings
# ```

############
# Answer 2 #
############

# informal_greeting[:a] is mutated and because it points to the same object id as greetings[:a],
# greetings[:a] will also be mutated.
#
# Output:
# {:a=>"hi there"}