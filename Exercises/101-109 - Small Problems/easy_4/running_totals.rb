# Write a method that takes an Array of numbers, and returns an Array with the same number of elements,
# and each element has the running total from the original Arra

def running_total(numbers)
  numbers.each.with_index do |num, i|
    if i != 0
      numbers[i] += numbers[i - 1]
    end
  end
  numbers
end

puts running_total([2, 5, 13]) == [2, 7, 20]
puts running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
puts running_total([3]) == [3]
puts running_total([]) == []