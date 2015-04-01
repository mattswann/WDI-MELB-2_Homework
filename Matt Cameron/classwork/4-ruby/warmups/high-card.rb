cards = {
	hearts: [2,3,4,5,6,7,8,9,10,"J","Q","K","A"],
	diamonds: [2,3,4,5,6,7,8,9,10,"J","Q","K","A"],
	spades: [2,3,4,5,6,7,8,9,10,"J","Q","K","A"],
	clubs: [2,3,4,5,6,7,8,9,10,"J","Q","K","A",]
}

deck = []

cards.each do |key, value|
	cards[key].each_with_index do |item, index|
		deck.push("#{item} of #{key}")
	end

end

shuffled_deck = deck.shuffle

player_count = 0
players = []

puts "#{player_count} players so far. Enter a player name, or type 'play'."
name = gets.chomp
players << name
player_count += 1

until name == 'play'
	puts "#{player_count} players so far. Enter a player name, or type 'play'."
	name = gets.chomp
	unless name == 'play'
		players << name
		player_count += 1
	end
end

def deal(players, deck)
	players.each do |player|
		card = deck.sample
		deck.slice!(0)
		puts "#{player}: #{card}"
		gets.chomp unless player == players[-1]
	end

	puts "Matt wins!"
end

deal(players, deck)