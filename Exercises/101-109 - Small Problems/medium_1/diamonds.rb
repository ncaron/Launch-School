# Write a method that displays a 4-pointed diamond in an n x n grid, where n is an odd integer that is
# supplied as an argument to the method. You may assume that the argument will always be an odd integer.

# Examples

# diamond(1)

# *

# diamond(3)

#  *
# ***
#  *

# diamond(9)

#     *
#    ***
#   *****
#  *******
# *********
#  *******
#   *****
#    ***
#     *

def diamond(height)
  spaces = height / 2
  i = 0
  stars = 1
  middle = false

  loop do
    if stars == height
      middle = true
    end

    print ' ' * spaces
    puts '*' * stars

    if middle
      spaces += 1
      stars -= 2
    else
      spaces -= 1
      stars += 2
    end
    i += 1
    break if i >= height
  end
end

diamond(1)
diamond(3)
diamond(9)