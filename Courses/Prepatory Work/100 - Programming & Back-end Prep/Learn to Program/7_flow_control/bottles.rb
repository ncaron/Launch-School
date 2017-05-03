bottles = 99

while bottles >= 0
  if bottles == 0
    puts "No more bottles of beer on the wall, no more bottles of beer."
    puts "Go to the store and buy some more, 99 bottles of beer on the wall."
  elsif bottles == 1
    puts "#{bottles} bottle of beer on the wall, #{bottles} bottles of beer."
  else
    puts "#{bottles} bottles of beer on the wall, #{bottles} bottles of beer."
  end
  bottles -= 1
  if bottles == 1
    puts "Take one down and pass it around, #{bottles} bottle of beer on the wall."
  elsif bottles == 0
    puts "Take one down and pass it around, no more bottles of beer on the wall."
  elsif bottles > 0
    puts "Take one down and pass it around, #{bottles} bottles of beer on the wall."
  end
  if bottles >= 0
    puts
  end
end