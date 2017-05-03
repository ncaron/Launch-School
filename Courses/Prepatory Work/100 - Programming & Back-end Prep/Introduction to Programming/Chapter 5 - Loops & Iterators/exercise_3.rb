movies = ["The Avengers", "Avatar", "Titanic", "Harry Potter", "Doctor Strange"]

movies.each_with_index { |movie, i| puts "#{i + 1}. #{movie}" }