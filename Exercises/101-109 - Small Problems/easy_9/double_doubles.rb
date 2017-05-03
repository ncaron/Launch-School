# A double number is a number with an even number of digits whose left-side digits are exactly the same as
# its right-side digits. For example, 44, 3333, 103103, 7676 are all double numbers.
# 444, 334433, and 107 are not.

# Write a method that returns 2 times the number provided as an argument, unless the argument is a double number;
# double numbers should be returned as-is.

# Examples:

# ```
# twice(37) == 74
# twice(44) == 44
# twice(334433) == 668866
# twice(444) == 888
# twice(107) == 214
# twice(103103) == 103103
# twice(3333) == 3333
# twice(7676) == 7676
# twice(123_456_789_123_456_789) == 123_456_789_123_456_789
# twice(5) == 10
# ```

# Note: underscores are used for clarity above. Ruby lets you use underscores when writing long numbers;
# however, it does not print the underscores when printing long numbers. Don't be alarmed if you don't see
# the underscores when running your tests.

def twice(num)
  if num.to_s.size.even?
    middle = num.to_s.size / 2
    first_half = num.to_s[0..middle - 1]
    second_half = num.to_s[middle..num.to_s.size]

    if first_half == second_half
      num
    else
      num * 2
    end
  else
    num * 2
  end
end

puts twice(37) == 74
puts twice(44) == 44
puts twice(334433) == 668866
puts twice(444) == 888
puts twice(107) == 214
puts twice(103103) == 103103
puts twice(3333) == 3333
puts twice(7676) == 7676
puts twice(123_456_789_123_456_789) == 123_456_789_123_456_789
puts twice(5) == 10