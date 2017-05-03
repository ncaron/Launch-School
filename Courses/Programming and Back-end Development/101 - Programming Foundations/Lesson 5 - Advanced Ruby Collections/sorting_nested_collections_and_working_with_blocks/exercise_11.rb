# Given the following data structure use a combination of methods,
# including either the select or reject method, to return a new array identical in
# structure to the original but containing only the integers that are multiples of 3.
#
# ```
# arr = [[2], [3, 5, 7], [9], [11, 13, 15]]
# ```

arr1 = [[2], [3, 5, 7], [9], [11, 13, 15]]

arr2 = arr1.map do |data|
         data.select { |x| x % 3 == 0 }
       end

p arr1
p arr2