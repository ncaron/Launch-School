info = { first_name: "Niko", last_name: "Caron" }
more_info = { age: 26, city: "Fremont" }

puts "merge creates a new hash with the hashes used."
puts "New hash #{info.merge(more_info)}"
puts "First hash: #{info}"
puts "Second hash: #{more_info}"
puts "As you can see, original hashes are not modified."
puts
puts "merge! modifies the original hash."
puts "merge! hash: #{info.merge!(more_info)}"
puts "First hash: #{info}"
puts "Second hash: #{more_info}"
puts "As you can see, first hash has been modified by adding the second hash values to it."