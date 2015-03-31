def display_menu
	puts " "
	puts "Crappy calculator"
	puts "-----------------"
	puts " "
	puts "a) Add"
	puts "b) Subtract"
	puts "c) Multiply"
	puts "d) Divide"
	puts "e) Squared"
	puts "f) Square root"
	puts "x) Quit"
	puts " "
end

def get_operation
	print "Enter your desired mathematical operation: "
	return gets.chomp
end

def get_number
	print "Enter a number: "
	return gets.chomp.to_i
end

def valid_op(op)
	if op == "a" || op == "b" || op == "c" || op == "d" || op == "e" ||
		 op == "f" || op == "x"
		return true
	else
		return false
	end
end

def perform_calculation(operator,num_1,num_2)
	puts " "
	print "Answer = "

	if operator == "a"
		puts num_1 + num_2
	elsif operator == "b"
		puts num_1 - num_2
	elsif operator == "c"
		puts num_1 * num_2
	elsif operator == "d"
		puts num_1 / num_2
	elsif operator == "e"
		puts num_1 * num_1
	elsif operator == "f"
		puts Math.sqrt(num_1)
	end
end

def app
	display_menu
	operation = get_operation
	
	until operation == "x"
		until valid_op(operation)
			puts "That response is invalid"
			operation = get_operation
		end

		number_1 = get_number
		unless operation == "e" || operation == "f"
			number_2 = get_number
		end

		perform_calculation(operation,number_1,number_2)

		sleep 2
		display_menu
		operation = get_operation
	end
end

app