##############
# Question 3 #
##############

# Alan wrote the following method, which was intended to show all of the factors of the input number:
#
# ```
# def factors(number)
#   dividend = number
#   divisors = []
#   begin
#     divisors << number / dividend if number % dividend == 0
#     dividend -= 1
#   end until dividend == 0
#   divisors
# end
# ```
#
# Alyssa noticed that this will fail if the input is 0, or a negative number, and asked Alan to change the loop.
# How can you change the loop construct (instead of using begin/end/until) to make this work?
# Note that we're not looking to find the factors for 0 or negative numbers,
# but we just want to handle it gracefully instead of raising an exception or going into an infinite loop.
# 
# Bonus 1
# What is the purpose of the number % dividend == 0 ?
#
# Bonus 2
# What is the purpose of the second-to-last line in the method (the divisors before the method's end)?

############
# Answer 3 #
############

# One way is to add an if statement to check wether the input is valid.
#
# Bonus 1
# number % dividend == 0 checks if there's any remainder. If there is, dividend is not a factor.
#
# Bonus 2
# divisors is the last thing that will be evaluated, therefore it will be returned by the method.

def factors(number)
  if number < 1
    "Number must be greater than 0."
  else
    dividend = number
    divisors = []
    begin
      divisors << number / dividend if number % dividend == 0
      dividend -= 1
    end until dividend == 0
    divisors
  end
end

puts factors(-42)