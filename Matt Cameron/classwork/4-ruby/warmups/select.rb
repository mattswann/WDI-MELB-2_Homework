
words = [hello anna simon madam benny kayak william]



def palindrome?(word)
	if word = word.reverse
		return true
	else
		return false
	end
end

words.select{ |w| palindrome?(w)}