if (2+2) == 5
	puts "The world has gone mad"
end

if (2+2) == 5
	puts "purple monkey dishwasher"
else
	puts "nothing new here, back to work"
end

person = 'waldo'

if person != 'wally'
	puts "Where, where, where, where is wally?"
end

puts "Where is wally? Where, where?" if person != 'wally'



# switch / case statement

grade = 'B'

case grade
	when "A"
		puts "Well done, you massive nerd!"
	when "B"
		puts "underachiever"
	when "C"
		puts "pick it up"
	else
		puts "you suck"
end