

puts "Let's play a guessing game. I'm going to think of a number, and you're going to try to guess it."
print "What should the highest number be? "
max_num = gets.chomp.to_i

puts "Okay, I'm thinking of a number between 1 and #{max_num}. Can you guess it?"
number = rand(1..max_num)

guess = gets.chomp.to_i


until guess == number
	if guess < number
		puts "A little higher..."
	else
		puts "A little lower..."
	end
	guess = gets.chomp.to_i
end

puts "Good guess! You were right!"