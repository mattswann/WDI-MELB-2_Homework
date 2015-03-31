
words = "hello anna simon madam benny kayak william".split(' ')


def palindrome?(word)
	word == word.reverse ? true : false
end

palindromes = words.select{ |w| palindrome?(w)}

puts palindromes