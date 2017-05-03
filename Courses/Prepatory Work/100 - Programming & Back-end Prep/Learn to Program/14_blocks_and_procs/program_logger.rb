def log block_description, &block
  puts "Starting block #{block_description}"
  block_return = block.call
  puts "Ending block #{block_description}"
  puts "Block #{block_description} returned #{block_return}."
end

number = 5

log 'Math' do
  log 'double' do
    number + number
  end

  log 'square' do
    number * number
  end
  false
end