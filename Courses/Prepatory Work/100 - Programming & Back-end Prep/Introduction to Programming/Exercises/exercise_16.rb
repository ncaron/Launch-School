a = ['white snow', 'winter wonderland', 'melting ice', 'slippery sidewalk', 'salted roads', 'white trees']

a_split = a.map { |words| words.split }

a_flatten = a_split.flatten

p a_flatten