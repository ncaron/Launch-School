contact_data = [
  ["joe@email.com", "123 Main st.", "555-123-4567"],
  ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]
]

contacts = {
  "Joe Smith" => {}, 
  "Sally Johnson" => {}
}

infos = [:email, :address, :phone]

contacts.each do |name, info_hash|
  infos.each do |info|
    info_hash[info] = contact_data.first.shift
  end
  contact_data.shift
end

puts contacts