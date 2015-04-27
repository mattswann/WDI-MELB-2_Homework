class Convo

	def talk(input)
			output = "Whatever"
			output =  "Sure" if input[-1] == "?"
			output = "Woah, chill out!" if input == input.upcase
			output = "Fine. Be that way!" if input.empty?
			output = l33t(output) if input[0..4] == "Bro, "
			output
	end

	def l33t(text)
		text.tr!("a", "4")
		text.tr!("e", "3")
		text.tr!("i", "1")
		text.tr!("o", "0")
		text
	end
end
