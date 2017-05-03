def modern_roman number
  thousands = number / 1000
  hundreds = number % 1000 / 100
  tens = number % 100 / 10
  ones = number % 10

  roman = 'M' * thousands

  if hundreds == 9
    roman += 'CM'
  elsif hundreds == 4
    roman += 'CD'
  else
    roman += 'D' * (number % 1000 / 500)
    roman += 'C' * (number % 500 / 100)
  end

  if tens == 9
    roman += 'XD'
  elsif tens == 4
    roman += 'XL'
  else
    roman += 'L' * (number % 100 / 50)
    roman += 'X' * (number % 50 / 10)
  end

  if ones == 9
    roman += 'IX'
  elsif ones == 4
    roman += 'IV'
  else
    roman += 'V' * (number % 10 / 5)
    roman += 'I' * (number % 5)
  end

  roman
end

number_to_change = 2017

puts "#{number_to_change} in modern Roman numerals is #{modern_roman(number_to_change)}"