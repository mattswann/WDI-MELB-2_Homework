
word = "listen"
array = ["enlists", "google", "inlets", "banana"]

	array.each do |arr|
		compare = arr.split("").sort <=> word.split("").sort
		if compare == 0
			puts "#{arr}"
		end
	end
