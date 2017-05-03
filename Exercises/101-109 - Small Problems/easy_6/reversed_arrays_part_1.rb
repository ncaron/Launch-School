# Write a method that takes an Array as an argument, and reverses its elements in place;
# that is, mutate the Array passed in to this method. The return value should be the
# same Array object.

# You may not use Array#reverse or Array#reverse!.

# Examples:

# ```
# list = [1,2,3,4]
# result = reverse!(list) # => [4,3,2,1]
# list == [4, 3, 2, 1]
# list.object_id == result.object_id
#
# list = %w(a b c d e)
# reverse!(list) # => ["e", "d", "c", "b", "a"]
# list == ["e", "d", "c", "b", "a"]
#
# list = ['abc']
# reverse!(list) # => ["abc"]
# list == ["abc"]
#
# list = []
# reverse!([]) # => []
# list == []
# ```

def reverse!(arr)
  i = 0

  loop do
    break if i >= arr.size / 2
    tmp = arr[i]
    arr[i] = arr[arr.size - i - 1]
    arr[arr.size - i - 1] = tmp
    i += 1
  end

  arr
end

list = [1,2,3,4]
result = reverse!(list) # => [4,3,2,1]
puts list == [4, 3, 2, 1]
puts list.object_id == result.object_id

list = %w(a b c d e)
reverse!(list) # => ["e", "d", "c", "b", "a"]
puts list == ["e", "d", "c", "b", "a"]

list = ['abc']
reverse!(list) # => ["abc"]
puts list == ["abc"]

list = []
reverse!([]) # => []
puts list == []