# Build a program that asks a user for the length and width of a room in meters
# and then displays the area of the room in both square meters and square feet.

# Note: 1 square meter == 10.7639 square feet

# Do not worry about validating the input at this time.

METERS_TO_FEET = 10.7639

puts 'Enter the length in meters:'
length = gets.to_f

puts 'Enter the width in meters:'
width = gets.to_f

square_meters = length * width
square_feet =  square_meters * METERS_TO_FEET

puts "The area of the room is #{square_meters} (#{square_feet.round(2)})."