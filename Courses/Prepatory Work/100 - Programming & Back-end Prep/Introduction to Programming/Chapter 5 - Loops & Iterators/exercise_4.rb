def countdown(number)
  if number < 0
    number
  else
    puts number
    countdown(number - 1)
  end
end

countdown(25)