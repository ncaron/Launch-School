###############
# Question 10 #
###############

# Consider these two simple methods:
#
# ```
# def foo(param = "no")
#   "yes"
# end
#
# def bar(param = "no")
#   param == "no" ? "yes" : "no"
# end
# ```
#
# What would be the output of this code:
#
# ```
# bar(foo)
# ```

#############
# Answer 10 #
#############

# "no"
#
# bar is called with the return of foo, which is "yes".
# param = "no" for bar is just the default if no params are passed in but "yes" is passed in.
# The ternary operator is evaluated and so "no" is returned.