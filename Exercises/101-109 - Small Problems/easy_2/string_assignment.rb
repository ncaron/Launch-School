# Take a look at the following code:
#
# ```
# name = 'Bob'
# save_name = name
# name = 'Alice'
# puts name, save_name
# ```
#
# What does this code print out? Think about it for a moment before continuing.
#
# ```
# Alice
# Bob
# ```
#
# you are 100% correct, and the answer should come as no surprise. Now, let's look at something a bit different:
#
# ```
# name = 'Bob'
# save_name = name
# name.upcase!
# puts name, save_name
# ```
#
# What does this print out? Can you explain these results?



##########
# ANSWER #
##########

# name = Bob and save_name points to the same area. Since save_name is not reasssigned to something else,
# it will also be capitalize by the destructive upcase! on name.

# Output: 
# BOB
# BOB
