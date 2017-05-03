contents = [
  ["Chapter 1: Getting Started", "page 1"],
  ["Chapter 2: Numbers", "page 9"],
  ["Chapter 3: Letters", "page 13"]
]

puts("Table of Contents".center(45))
puts

contents.each do |content|
  puts(content[0].ljust(30) + content[1].rjust(20))
end