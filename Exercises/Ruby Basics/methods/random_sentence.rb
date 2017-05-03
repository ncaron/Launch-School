def sentence(name, activity)
  "#{name} went #{activity} today!"
end

def name(name)
  name.sample
end

def activity(activity)
  activity.sample
end

names = ['Dave', 'Sally', 'George', 'Jessica']
activities = ['walking', 'running', 'cycling']

puts sentence(name(names), activity(activities))