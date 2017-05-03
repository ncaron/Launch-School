info = {
  first_name: "Niko",
  last_name: "Caron",
  age: 26,
  city: "Fremont"
}

puts "To check if a hash has a specific value, use the has_value? method"
puts info
puts "Check if it contains 'Niko' then 'New York'"
puts "Niko: #{info.has_value?("Niko")}"
puts "New York: #{info.has_value?("New York")}"