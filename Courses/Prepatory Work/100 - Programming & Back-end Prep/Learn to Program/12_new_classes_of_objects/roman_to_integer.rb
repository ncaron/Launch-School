def roman_to_integer numeral
  values = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000
  }

  reversed_numeral = numeral.reverse.downcase
  number = 0
  after = 0;

  reversed_numeral.each_char do |current|
    value = values[current.to_sym]

    if !value
      print "Invalid Roman Numeral."
      return
    end

    if value < after
      value *= -1
    else
      after = value
    end
    number += value
  end
  number
end

puts roman_to_integer('MCMXCIX')