# Write a program to decode this message:

# FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.

# This is a form of cryptography known as the Caesar Ciper. It has a shift parameter of 3.

# The alphabet is normally:

# ABCDEFGHIJKLMNOPQRSTUVWXYZ

# The alphabet with the shift parameter of 3 is now as follows:

# DEFGHIJKLMNOPQRSTUVWXYZABC

class CaesarCipher

	@alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')

	@shifted_alphabet = "DEFGHIJKLMNOPQRSTUVWXYZABC".split('')

	def decipher(string)
		output = []
		string.upcase.chars.each_with_index do |letter, index|

			if letter =~ /\W/
				output.push(letter)
				next
			end

			idx = @shifted_alphabet.index(letter)

			output.push(@alphabet[idx])
		end
		puts output.join("")
	end

	def self.encode(string, shift)
		output = []
		# set up new alphabet
		shifted_alphabet = []
		@alphabet.each_with_index do |l, i|
				new_letter_index = i - shift
				new_letter_index + 26 if new_letter_index < 0
				shifted_alphabet.push(@alphabet[new_letter_index])
			end

		string.upcase.chars.each_with_index do |letter, index|
			if letter =~ /\W/
				output.push(letter)
				next
			end

			idx = @alphabet.index(letter)
			output.push(shifted_alphabet[idx])
		end
		puts output.join("")
	end

end