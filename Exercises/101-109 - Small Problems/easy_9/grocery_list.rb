# Write a method which takes a grocery list (array) of fruits with quantities and converts it into an array of
# the correct number of each fruit.

# Example:

# ```
# buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
#   ["apples", "apples", "apples", "orange", "bananas","bananas"]
# ```

def buy_fruit(list)
  fruits = []

  list.each do |fruit|
    1.upto(fruit[1]) { fruits << fruit[0] }
  end

  fruits
end

puts buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
       ["apples", "apples", "apples", "orange", "bananas","bananas"]