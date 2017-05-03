# The time of day can be represented as the number of minutes before or after midnight.
# If the number of minutes is positive, the time is after midnight.
# If the number of minutes is negative, the time is before midnight.

# Write a method that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm).
# Your method should work with any integer input.

# You may not use ruby's Date and Time classes.

# Disregard Daylight Savings and Standard Time and other complications.

def time_of_day(minutes)
  minutes_day = 1440
  negative = false

  if minutes < 0
    minutes *= -1
    negative = true
  end

  while minutes > minutes_day
    minutes -= minutes_day
  end

  current_time = negative ? minutes_day - minutes : minutes
  current_minute = (current_time % 60).to_s
  current_hour = (current_time / 60).to_s

  if current_minute.size < 2
    current_minute.prepend('0')
  end

  if current_hour.size < 2
    current_hour.prepend('0')
  end

  current_hour + ':' + current_minute
end

puts time_of_day(0) == "00:00"
puts time_of_day(-3) == "23:57"
puts time_of_day(35) == "00:35"
puts time_of_day(-1437) == "00:03"
puts time_of_day(3000) == "02:00"
puts time_of_day(800) == "13:20"
puts time_of_day(-4231) == "01:29"