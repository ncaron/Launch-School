##############
# Question 9 #
##############

# Method calls can take expressions as arguments. Suppose we define a function called rps as follows,
# which follows the classic rules of rock-paper-scissors game, but with a slight twist that it declares
# whatever hand was used in the tie as the result of that tie.
#
# ```
# def rps(fist1, fist2)
#   if fist1 == "rock"
#     (fist2 == "paper") ? "paper" : "rock"
#   elsif fist1 == "paper"
#     (fist2 == "scissors") ? "scissors" : "paper"
#   else
#     (fist2 == "rock") ? "rock" : "scissors"
#   end
# end
# ```
#
# What is the result of the following call?
#
# ```
# puts rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")
# ```

############
# Answer 9 #
############

# puts rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")
#
# First evaluate rps("rock", "paper")
# => "paper"
#
# puts rps(rps("paper", rps("rock", "scissors")), "rock")
#
# Next evaluate rps("rock", "scissors")
# => "rock"
#
# puts rps(rps("paper", "rock"), "rock")
#
# Next evaluate rps("paper", "rock")
# => "paper"
#
# puts rps("paper", "rock")
#
# Next evaluate rps("paper", "rock")
# => paper
#
# Output:
# paper