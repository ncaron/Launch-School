def shuffle songs
  shuffle_songs songs, []
end

def shuffle_songs unshuffled, shuffled
  while unshuffled.length > 0
    random = unshuffled.delete_at(rand(unshuffled.length))
    shuffled.push(random)
  end
  shuffled
end

mp3s = shuffle(Dir['/nfs/2016/n/ncaron/launch-school/learn_to_program/11_doing_things/songs/*.mp3'])

File.open 'playlist.m3u', 'w' do |f|
  mp3s.each do |song|
    f.write "#{song}\n"
  end
end

puts "Done"