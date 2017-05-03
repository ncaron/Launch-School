VALID_CHOICES = {
  rock: 'r',
  paper: 'p',
  scissors: 'sc',
  lizard: 'l',
  spock: 'sp'
}

WINS = {
  rock: %w(scissors lizard),
  paper: %w(rock spock),
  scissors: %w(paper lizard),
  lizard: %w(paper spock),
  spock: %w(rock scissors)
}

def prompt(message)
  puts "=> #{message}"
end

def valid_choice?(choice)
  VALID_CHOICES.value?(choice) || VALID_CHOICES.key?(choice.to_sym)
end

def player_win?(player, computer)
  WINS[player.to_sym].include?(computer)
end

def display_choices(player, computer)
  prompt('You chose:'.ljust(16) + player.to_s)
  prompt("Computer chose: #{computer}")
end

def display_results(winner)
  if winner == 'tie'
    prompt("It's a tie!")
  else
    prompt("#{winner.capitalize} won and gained a point!")
  end
  puts
end

def display_score(score)
  prompt("Player Score: #{score['player'].to_s.rjust(5)}")
  prompt("Computer Score: #{score['computer'].to_s.rjust(3)}")
  puts
end

def display_winner(player_score)
  prompt player_score == 5 ? 'Player Won!' : 'Computer Won!'
end

def clear_display
  system('clear') || system('cls')
end

clear_display
prompt('Welcome! The first to 5 points wins!')

loop do
  score = { player: 0, computer: 0 }
  score.default = 0

  while !score.value?(5)
    player_choice = ''
    loop do
      prompt("Choose one: #{VALID_CHOICES.keys.join(', ')}")
      prompt("You may shorten the word: #{VALID_CHOICES.values.join(', ')}")
      player_choice = gets.chomp

      if VALID_CHOICES.value?(player_choice)
        player_choice = VALID_CHOICES.key(player_choice).to_s
        break
      elsif VALID_CHOICES.key?(player_choice.to_sym)
        break
      else
        prompt("That's not a valid choice.")
      end
    end

    computer_choice = VALID_CHOICES.keys.sample.to_s

    clear_display

    display_choices(player_choice, computer_choice)

    winner = if player_choice == computer_choice
               'tie'
             elsif player_win?(player_choice, computer_choice)
               'player'
             else
               'computer'
             end

    score[winner] += 1
    display_results(winner)
    display_score(score)
  end

  display_winner(score['player'])

  prompt('Do you want to play again?')
  answer = gets.chomp.downcase
  break unless answer == 'y' || answer == 'yes'
  clear_display
end

prompt('Thank you for playing. Good bye!')
