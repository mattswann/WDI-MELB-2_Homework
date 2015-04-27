require_relative 'words'

def word_ladder_neighbours(start_word)
	result = []

	#loop through each word
	 FOUR_LETTER_WORDS.each do |word|

		#set the counter to 0
		tally = 0

		#check each letter. Ensure that 3 are the same
		tally += 1 if word[0] == start_word[0]
		tally += 1 if word[1] == start_word[1]
		tally += 1 if word[2] == start_word[2]
		tally += 1 if word[3] == start_word[3]

		result << word if tally == 3
	 end
	result
end

puts word_ladder_neighbours('aloe')

# FOUR_LETTER_WORDS.select do |word|
# 	word_ladder_neighbours(word).count == 33
# end