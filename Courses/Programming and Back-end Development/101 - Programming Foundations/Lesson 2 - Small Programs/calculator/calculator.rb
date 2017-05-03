require 'yaml'

MESSAGES = YAML.load_file('calculator_messages.yml')
language = ''

def messages(message, lang)
  MESSAGES[lang][message]
end

def prompt(message)
  puts "=> #{message}"
end

def valid_number?(num)
  num.to_i.to_s == num || num.to_f.to_s == num
end

def op_to_message(op, lang)
  message = case op
            when '1'
              messages('add', lang)
            when '2'
              messages('subtract', lang)
            when '3'
              messages('multiply', lang)
            when '4'
              messages('divide', lang)
            end
  message
end

prompt(messages('choose_language', 'all'))
loop do
  language = gets.chomp

  if language == '1'
    language = 'en'
    break
  elsif language == '2'
    language = 'fr'
    break
  else
    prompt(messages('invalid_language', 'all'))
  end
end

prompt(messages('welcome', language))

name = ''
loop do
  name = gets.chomp

  if name.empty?
    prompt(messages('valid_name', language))
  else
    break
  end
end

prompt("#{messages('hi', language)} #{name}!")

loop do
  number1 = ''
  loop do
    prompt(messages('first_number', language))
    number1 = gets.chomp

    if valid_number?(number1)
      break
    else
      prompt(messages('invalid_number', language))
    end
  end

  number2 = ''
  loop do
    prompt(messages('second_number', language))
    number2 = gets.chomp

    if valid_number?(number2)
      break
    else
      prompt(messages('invalid_number', language))
    end
  end

  prompt(messages('operation', language))

  op = ''
  loop do
    op = gets.chomp

    if %w(1 2 3 4).include?(op)
      break
    else
      prompt(messages('invalid_operation', language))
    end
  end

  prompt("#{op_to_message(op, language)} #{messages('numbers', language)}")

  result = case op
           when '1'
             number1.to_i + number2.to_i
           when '2'
             number1.to_i - number2.to_i
           when '3'
             number1.to_i * number2.to_i
           when '4'
             number1.to_f / number2.to_f
           end

  prompt("#{messages('result', language)} #{result}")

  prompt(messages('calculate_again', language))
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt(messages('exit', language))
