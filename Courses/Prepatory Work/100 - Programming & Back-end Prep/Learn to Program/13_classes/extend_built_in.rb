class Array
  def shuffle
    shuffle_words self, []
  end

  def shuffle_words unshuffled, shuffled
    while unshuffled.length > 0
      random = unshuffled.delete_at(rand(unshuffled.length))
      shuffled.push(random)
    end
    shuffled
  end
end

class Integer
  def factorial
    if self < 0
      print "You can't take the factorial of a negative number."
      return
    end

    self <= 1 ? 1 : self * (self - 1).factorial
  end

  def to_roman
    thousands = self / 1000
    hundreds = self % 1000 / 100
    tens = self % 100 / 10
    ones = self % 10
  
    roman = 'M' * thousands
  
    if hundreds == 9
      roman += 'CM'
    elsif hundreds == 4
      roman += 'CD'
    else
      roman += 'D' * (self % 1000 / 500)
      roman += 'C' * (self % 500 / 100)
    end
  
    if tens == 9
      roman += 'XD'
    elsif tens == 4
      roman += 'XL'
    else
      roman += 'L' * (self % 100 / 50)
      roman += 'X' * (self % 50 / 10)
    end
  
    if ones == 9
      roman += 'IX'
    elsif ones == 4
      roman += 'IV'
    else
      roman += 'V' * (self % 10 / 5)
      roman += 'I' * (self % 5)
    end
  
    roman
  end
end

p ["Hey", "Hi", "Bonjour", "Just Testing"].shuffle
puts 5.factorial
puts 1990.to_roman