family = {
  uncles: ["bob", "joe", "steve"],
  sisters: ["jane", "jill", "beth"],
  brothers: ["frank", "rob", "david"],
  aunts: ["mary", "sally", "susan"]
}

immediate_family = []

family.select do |k, v|
  if k == :sisters || k == :brothers
    immediate_family.push(v)
  end
end

p immediate_family.flatten!