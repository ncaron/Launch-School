##############
# Question 7 #
##############

# Fun with gsub:
#
# ```
# def add_eight(number)
#   number + 8
# end
#
# number = 2
#
# how_deep = "number"
# 5.times { how_deep.gsub!("number", "add_eight(number)") }
#
# p how_deep
# ```
#
# This gives us a string that looks like a "recursive" method call:
#
# ```
# "add_eight(add_eight(add_eight(add_eight(add_eight(number)))))"
# ```
#
# If we take advantage of Ruby's Kernel#eval method to have it execute this string as if it were a "recursive" method call
#
# ```
# eval(how_deep)
# ```
#
# what will be the result?

############
# Answer 7 #
############

# add_eight is executed 5 times on number so 5*8 = 40 and we add the original number in the first call.
# Answer = 42

puts 'Question 7'
def add_eight(number)
  number + 8
end

number = 2

how_deep = "number"
5.times { how_deep.gsub!("number", "add_eight(number)") }

p how_deep

puts "Result: #{eval(how_deep)}"