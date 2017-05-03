$log_count = 0

def log block_description, &block
  puts "#{' ' * $log_count}Starting block #{block_description}"
  $log_count += 1
  block_return = block.call
  $log_count -= 1
  puts "#{' ' * $log_count}Ending block #{block_description}"
  puts "#{' ' * $log_count}Block #{block_description} returned #{block_return}."
  puts if $log_count != 0
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