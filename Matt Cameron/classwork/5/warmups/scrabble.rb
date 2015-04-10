class Scrabble

	def self.score(word)
		@score = 0
		word.upcase!.split("").each {|letter| check_letter(letter)}
		puts @score
	end

	def self.check_letter(letter)
		scores = {
			1 => %w{A E I O U L N R S T},
			2 => %w{D G},
			3 => %w{B C M P},
			4 => %w{F H V W Y},
			5 => %w{K},
			8 => %w{J W},
			10 => %w{Q Z}
		}

		scores.each do |key, value|
			if value.include?(letter)
				@score += key
			end
		end

	end
end


Scrabble.score("cabbage")
Scrabble.score("Hello")

