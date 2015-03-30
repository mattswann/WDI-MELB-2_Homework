def calc(first, operation, second)
	case operation
	when "a"
		puts first + second
	when "b"
		puts first - second
	when "c"
		puts first * second
	when "d"
		puts first.to_f / second
	when "e"
		puts first * first
	when "f"
		puts Math.sqrt(first)
	else
		puts "Invalid selection"
		exit
	end
end

def userQuit(input)
	if input == "q"
		puts "Thanks for using the Ruby Calculator!"
		exit
	end
end


while true
	puts ""
	puts "Welcome to the Ruby Calculator"
	print "Enter the first number: "
	first = gets.chomp
	userQuit(first)

		puts "Choose an operation? (a,b,c or d)"
	puts "a) plus"
	puts "b) minus"
	puts "c) times"
	puts "d) divided by"
	puts "e) squared"
	puts "f) square root"
	puts "=) EQUALS"
	puts ""
	puts "press 'q' at any time to quit"

	operation = gets.chomp.downcase
	userQuit(operation)

	unless (operation == "e" || operation == "f")
		print "Enter the second number: "
		second = gets.chomp
		userQuit(second)
	end

	calc(first.to_i, operation, second.to_i)


end