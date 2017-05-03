def old_roman number
  numerals = [
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [10, 'X'],
    [5, 'V'],
    [1, 'I']
  ]
  roman = ''

  numerals.each do |numeral|
    while number >= numeral[0]
      roman += numeral[1]
      number -= numeral[0]
      end  
  end

  roman
end

number_to_change = 2017

puts "#{number_to_change} in old Roman numerals is #{old_roman(number_to_change)}"