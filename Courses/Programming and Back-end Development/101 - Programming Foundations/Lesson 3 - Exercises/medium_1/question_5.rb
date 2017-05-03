##############
# Question 5 #
##############

# Alyssa asked Ben to write up a basic implementation of a Fibonacci calculator,
# A user passes in two numbers, and the calculator will keep computing the sequence until some limit is reached.
#
# Ben coded up this implementation but complained that as soon as he ran it, he got an error.
# Something about the limit variable. What's wrong with the code?
#
# ```
# limit = 15
#
# def fib(first_num, second_num)
#   while second_num < limit
#     sum = first_num + second_num
#     first_num = second_num
#     second_num = sum
#   end
#   sum
# end
#
# result = fib(0, 1)
# puts "result is #{result}"
# ```
#
# How would you fix this so that it works?

############
# Answer 5 #
############

# fib cannot access limit because of scope limitations.
# A fix is to pass in limit to the method along with first_num and second_num.

limit = 15

def fib(first_num, second_num, limit)
  while second_num < limit
    sum = first_num + second_num
    first_num = second_num
    second_num = sum
  end
  sum
end

result = fib(0, 1, limit)
puts "result is #{result}"