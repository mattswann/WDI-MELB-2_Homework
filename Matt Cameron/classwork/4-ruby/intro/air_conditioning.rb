def check_climate(current_temp, desired_temp, air_con)
	if (air_con == "yes" && current_temp > desired_temp)
		puts "Turn on the A/C please!"
	elsif (air_con == "no" && current_temp > desired_temp)
		puts "Fix the A/C now! It's hot!"
	elsif (air_con == "no" && current_temp < desired_temp)
		puts "Fix the A/C whenever you get a chance... It's cool..."
	end
end


print "What is the current temperature? "
current_temp = gets.chomp.to_i

print "Is the A/C turned working? "
air_con = gets.chomp

print "What temperature would you like it to be? "
desired_temp = gets.chomp.to_i

# run it
check_climate(current_temp, desired_temp, air_con)