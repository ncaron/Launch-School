info = {
  first_name: "Niko",
  last_name: "Caron",
  age: 26,
  city: "Fremont"
}

puts "Prints only the keys"
info.each_key { |k| puts k }
puts

puts "Prints only the values"
info.each_value { |v| puts v }
puts

puts "Prints keys and values"
info.each { |k, v| puts "#{k} - #{v}" }