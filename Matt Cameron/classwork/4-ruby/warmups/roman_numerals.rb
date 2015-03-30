def number_to_roman(number)
	if number < 4000
		roman = []
		arr = number.to_s.split("")

		singles = check_singles(arr[-1].to_i) unless arr.fetch(-1, "no") == "no"
		tens = check_tens(arr[-2].to_i) unless arr.fetch(-2, "no") == "no"
		hundreds = check_hundreds(arr[-3].to_i) unless arr.fetch(-3, "no") == "no"
		thousands = check_tens(arr[-4].to_i) unless arr.fetch(-4, "no") == "no"

		puts "#{thousands}#{hundreds}#{tens}#{singles}"
	else
		puts "That is an invalid number. Try again:"
	end
end


def check_singles(digit)
	singles = ["I","II","III","IV","V","VI","VII","VIII","IV"]
	singles[digit-1]
end

def check_tens(tens)
	tens_arr = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
	tens_arr[tens-1]
end

def check_hundreds(hundreds)
	hundreds_arr = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
	hundreds_arr[hundreds-1]
end


def check_thousands(thousands)
	thousands_arr = ["M","MM","MMM"]
	thousands_arr[thousands-1]
end

puts "Enter a number to convert it to Roman Numerals:"
number = gets.chomp

until number == "q"
	number_to_roman(number.to_i)
	puts "Enter a number to convert it to Roman Numerals:"
	number = gets.chomp
end



