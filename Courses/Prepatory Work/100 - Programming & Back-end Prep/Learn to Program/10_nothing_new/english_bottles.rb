def english_number number
  if number < 0
    return "Please enter a number that isn't negative."
  end
  if number == 0
    return 'zero'
  end

  num_s = ""
  ones_place = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  tens_place = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
  teenagers = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

  left = number
  write = left / 1000000000
  left = left - write * 1000000000

  if write > 0
    trillions = english_number write
    num_s = num_s + trillions + " trillion"
    if left > 0
      num_s = num_s + " "
    end
  end

  write = left / 1000000
  left = left - write * 1000000

  if write > 0
    millions = english_number write
    num_s = num_s + millions + " million"
    if left > 0
      num_s = num_s + " "
    end
  end

  write = left / 1000
  left = left - write * 1000

  if write > 0
    thousands = english_number write
    num_s = num_s + thousands + " thousand"
    if left > 0
      num_s = num_s + " "
    end
  end

  write = left / 100
  left = left - write * 100

  if write > 0
    hundreds = english_number write
    num_s = num_s + hundreds + " hundred"
    if left > 0
      num_s = num_s + " "
    end
  end

  write = left / 10
  left = left - write * 10

  if write > 0
    if ((write == 1) and (left > 0))
      num_s = num_s + teenagers[left - 1]
      left = 0
    else
      num_s = num_s + tens_place[write - 1]
    end

    if left > 0
      num_s = num_s + "-"
    end
  end

  write = left
  left = 0

  if write > 0
    num_s = num_s + ones_place[write - 1]
  end

  num_s
end

bottles = 99

while bottles >= 0
  if bottles == 0
    puts "No more bottles of beer on the wall, no more bottles of beer."
    puts "Go to the store and buy some more, 99 bottles of beer on the wall."
  elsif bottles == 1
    puts english_number(bottles) + " bottle of beer on the wall, " + english_number(bottles) + " bottle of beer."
  else
    puts english_number(bottles) + " bottles of beer on the wall, " + english_number(bottles) + " bottles of beer."
  end
  bottles -= 1
  if bottles == 1
    puts "Take one down and pass it around, " + english_number(bottles) + " bottle of beer on the wall."
  elsif bottles == 0
    puts "Take one down and pass it around, no more bottles of beer on the wall."
  elsif bottles > 0
    puts "Take one down and pass it around, " + english_number(bottles) + " bottles of beer on the wall."
  end
  if bottles >= 0
    puts ""
  end
end