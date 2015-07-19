
def letter_count(string)
	letters = string.downcase!.chars
	results = {}
	checked_letters = []
	letters.each do |letter|
		# skip if letter has already been checked
		next if checked_letters.include? letter

		# get count for each letter
		count = string.count(letter)

		# push it into results hash
		results[letter] = count

	end
		puts results
end


letter_count('General Assembly school for coders codyperry')