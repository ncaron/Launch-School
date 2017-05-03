puts "What year were you born?"
year = gets.chomp.to_i

puts "What month were you born?"
month = gets.chomp.to_i

puts "What day were you born?"
day = gets.chomp.to_i

born = Time.mktime(year, month, day)
age = (Time.now - born).to_i / 60 / 60 / 24 / 365

while age > 0
  puts "SPANK!"
  age -= 1
end