Dir.chdir '/nfs/2016/n/ncaron/launch-school/learn_to_program/11_doing_things/dest'

pictures = Dir['/nfs/2016/n/ncaron/launch-school/learn_to_program/11_doing_things/src/*.{JPG,jpg}']

puts 'What would you like to call these pictures?'
picture_names = gets.chomp

puts
print "Downloading #{pictures.length} pictures: "

picture_number = 1

pictures.each do |picture|
  print '.'

  new_name = if picture_number < 100
               "#{picture_names}00#{picture_number}.jpg"
             else
               "#{picture_names}picture_names#{picture_number}.jpg"
             end

  if File.exist?(new_name)
    puts
    puts "ERROR! #{new_name} already exists!"
    exit
  else
    File.rename picture, new_name
  end
  picture_number += 1
end

puts
puts 'Done'