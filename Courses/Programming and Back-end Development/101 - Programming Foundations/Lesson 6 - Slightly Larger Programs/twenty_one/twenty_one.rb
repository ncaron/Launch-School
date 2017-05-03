# rubocop:disable Style/EndOfLine
require 'pry'
# rubocop:enable Style/EndOfLine

MAX = 21
DEALER_STOPS = 17
WINNING_SCORE = 5

def prompt(message)
  puts "=> #{message}"
end

def initialize_deck
  {
    hearts: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    spades: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    clubs: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    diamonds: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  }
end

def deal_card(deck)
  suit = deck.keys.sample
  max = deck[suit].size - 1
  card = deck[suit].delete_at(rand(0..max))
  [suit.to_s, card]
end

def calculate_value(player_cards)
  total = 0
  aces = 0

  player_cards.each do |card|
    if card[1] == 'A'
      aces += 1
    elsif 'JQK'.include?(card[1])
      total += 10
    else
      total += card[1].to_i
    end
  end

  aces.times { total += total + 11 <= 21 ? 11 : 1 }

  total
end

def display_score(scores)
  puts "Player Score: #{scores[:player]}"
  puts "Dealer Score: #{scores[:dealer]}"
end

def display_player_cards(player_cards)
  puts 'PLAYER'

  player_cards.each do |card|
    puts "#{card[1]} of #{card[0]}."
  end

  puts "Value: #{calculate_value(player_cards)}"
  puts 'BUST!' if bust?(player_cards)
end

def display_dealer_cards(dealer_cards)
  puts 'DEALER'

  dealer_cards.each do |card|
    if card == 'UNKNOWN'
      puts card
    else
      puts "#{card[1]} of #{card[0]}."
    end
  end

  puts "Value: #{calculate_value(dealer_cards)}"
  puts 'BUST!' if bust?(dealer_cards)
end

def display_cards(player_cards, dealer_cards, scores)
  system 'cls' or system 'clear'

  display_score(scores)

  puts
  puts '---------------'
  puts

  display_player_cards(player_cards)

  puts
  puts '---------------'
  puts

  display_dealer_cards(dealer_cards)
end

def bust?(cards)
  calculate_value(cards) > MAX
end

def player_turn(deck, player_cards, dealer_cards, scores)
  display_cards(player_cards, dealer_cards, scores)

  loop do
    prompt "Would you like to hit or stay?"
    answer = gets.chomp

    player_cards << deal_card(deck) if answer == 'hit'
    display_cards(player_cards, dealer_cards, scores)

    break if answer.downcase == 'stay' || calculate_value(player_cards) > MAX

    prompt 'Invalid choice!' unless ['hit', 'stay'].include?(answer.downcase)
  end
end

def dealer_turn(deck, player_cards, dealer_cards, scores)
  display_cards(player_cards, dealer_cards, scores)

  loop do
    break if calculate_value(dealer_cards) >= DEALER_STOPS

    dealer_cards << deal_card(deck)
  end

  display_cards(player_cards, dealer_cards, scores)
end

def detect_winner(player_cards, dealer_cards)
  if calculate_value(player_cards) > calculate_value(dealer_cards)
    'Player'
  elsif calculate_value(player_cards) < calculate_value(dealer_cards)
    'Dealer'
  else
    "Tie"
  end
end

def display_winner(winner)
  if winner == 'Tie'
    prompt "It's a tie!"
  else
    prompt "#{winner} wins this round!"
  end
end

loop do
  scores = Hash.new(0)

  loop do
    deck = initialize_deck

    player_cards = [deal_card(deck), deal_card(deck)]
    dealer_cards = [deal_card(deck), 'UNKNOWN']
    unknown_dealer_card = deal_card(deck)

    player_turn(deck, player_cards, dealer_cards, scores)

    if bust?(player_cards)
      winner = 'Dealer'
    else
      dealer_cards[1] = unknown_dealer_card
      dealer_turn(deck, player_cards, dealer_cards, scores)

      if bust?(dealer_cards)
        winner = 'Player'
      else
        winner = detect_winner(player_cards, dealer_cards)
      end
    end

    if winner == 'Player'
      scores[:player] += 1
    elsif winner == 'Dealer'
      scores[:dealer] += 1
    end

    display_cards(player_cards, dealer_cards, scores)
    display_winner(winner)

    break if scores.values.include?(WINNING_SCORE)

    prompt "Enter any key to continue."
    gets.chomp
  end

  if scores[:player] == 5
    prompt 'Player is the grand champion!'
  else
    prompt 'Dealer is the grand champion!'
  end

  prompt 'Would you like to play again? (y or n)'
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt "Thank you for playing #{MAX}!"
