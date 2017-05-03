require 'yaml'

MESSAGES = YAML.load_file('loan_calculator_messages.yml')
LANGUAGES = MESSAGES.map { |language| language[0] }
language = ''

def messages(lang, message)
  MESSAGES[lang][message]
end

def prompt(message = '')
  if message == ''
    print '=>'
  else
    puts "=> #{message}"
  end
end

def valid_number?(number)
  number.to_i.to_s == number || number.to_f.to_s == number
end

def valid_language?(language)
  language.to_i.to_s == language &&
    language.to_i > 0 && language.to_i < LANGUAGES.length
end

def valid_loan_amount?(loan_amount)
  valid_number?(loan_amount) && loan_amount.to_f > 0
end

def valid_annual_percent?(annual_percent)
  valid_number?(annual_percent) &&
    annual_percent.to_f > 0 && annual_percent.to_f <= 100
end

def valid_loan_duration_years?(loan_duration_years)
  valid_number?(loan_duration_years) && loan_duration_years.to_i > 0
end

def valid?(type, amount)
  if type == 'loan_amount'
    valid_loan_amount?(amount)
  elsif type == 'annual_percent'
    valid_annual_percent?(amount)
  else
    valid_loan_duration_years?(amount)
  end
end

def amount(lang, type, invalid_message)
  amount = ''
  loop do
    prompt(messages(lang, type))
    amount = gets.chomp

    break if valid?(type, amount)
    prompt(messages(lang, invalid_message))
  end
  amount
end

prompt
MESSAGES['all']['choose_language'].each { |all_message| puts all_message[1] }
MESSAGES['all']['languages'].each { |all_language| puts all_language[1] }
loop do
  language = gets.chomp

  if valid_language?(language)
    language = LANGUAGES[language.to_i]
    break
  else
    prompt
    MESSAGES['all']['invalid_language'].each do |all_invalid_language|
      puts "#{all_invalid_language[1]} #{LANGUAGES.length - 1}"
    end
  end
end

prompt(messages(language, 'welcome'))

loop do
  loan_amount =
    amount(language, 'loan_amount', 'invalid_loan_amount').to_f

  annual_percent =
    amount(language, 'annual_percent', 'invalid_annual_percent').to_f / 100

  loan_duration_years =
    amount(language, 'loan_duration_years', 'invalid_loan_duration_years').to_i

  monthly_interest = annual_percent / 12
  loan_duration_months = loan_duration_years * 12
  monthly_payment = loan_amount *
                    (monthly_interest /
                    (1 - (1 + monthly_interest)**-loan_duration_months))
  monthly_payment = format('%#.2f', monthly_payment)

  puts "#{messages(language, 'monthly_payment')}#{monthly_payment}"

  prompt(messages(language, 'calculate_again'))
  answer = gets.chomp.downcase
  break unless answer == 'y' || answer == 'yes'
end

prompt(messages(language, 'exit'))
