# Write a method that takes two Arrays as arguments, and returns an Array that contains
# all of the values from the argument Arrays. There should be no duplication of
# values in the returned Array, even if there are duplicates in the original Arrays.

# Example

# ```
# merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]
# ```

def merge(arr1, arr2)
  merged_arr = []

  arr1.each { |el| merged_arr << el }
  arr2.each { |el| merged_arr << el }

  merged_arr.uniq
end

puts merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]