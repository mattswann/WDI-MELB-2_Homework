def letter_count(string)
	results = {}
	string.downcase!.chars.each do |letter|
		results[letter] ||= string.count(letter)
	end
	results
end

puts letter_count('General')