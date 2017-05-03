# Write a method that counts the number of occurrences of each element in a given array.
# Once counted, print each element alongside the number of occurrences.

def count_occurrences(vehicles)
  unique_vehicles = vehicles.uniq

  unique_vehicles.each do |vehicle|
    puts "#{vehicle} => #{vehicles.count(vehicle)}"
  end
end

vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck']

count_occurrences(vehicles)