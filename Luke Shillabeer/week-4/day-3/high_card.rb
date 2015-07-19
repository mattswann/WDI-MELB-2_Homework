def random_pick(cards, suits)
  val  = cards.sample
  suit = suits.sample
  [val, suit]
end

card_vals  = ["2", "3", "4", "5", "6", "7",
              "8", "9", "J", "Q", "K", "A"]
card_suits = ["H", "D", "C", "S"]
players = {}

while true
  print "Enter Name: "
  player_name = gets.chomp

  players[player_name] ||= random_pick(card_vals, card_suits)

  print "Continue adding players? y/n: "
  game_continue = gets.chomp

  break if game_continue == "n"
end

print "-------------------------------\n"
players.each  do |key, val|
  print "#{ key } got the card #{ val.join("") }.\n"
end

players.select do |key, val|

end
