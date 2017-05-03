# Given the following data structure, return a new array containing the same
# sub-arrays as the original but ordered logically according to the numeric
# value of the odd integers they contain.
#
# ```
# arr = [[1, 6, 7], [1, 4, 9], [1, 8, 3]]
# ```
#
# The sorted array should look like this:
#
# ```
# [[1, 8, 3], [1, 6, 7], [1, 4, 9]]
# ```

arr = [[1, 6, 7], [1, 4, 9], [1, 8, 3]]

arr2 = arr.sort_by do |sub|
         sub.select { |x| x.odd? }
       end

p arr
p arr2