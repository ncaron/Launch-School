time = Time.new
born = Time.mktime(1990, 3, 16, 4)
billion = (born + 1000000000).to_s

puts "I was born on #{born} (second: #{born .to_i})."
puts
puts "I will be one billion seconds old on #{billion}."