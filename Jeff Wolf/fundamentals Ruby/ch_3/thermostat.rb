current_temp = 18


puts("Is this your house, type 1 for yes, type 0 for no?")

my_house_input = gets().chomp().to_i()

if my_house_input == 1
    puts("Would you like to increase or decrease temperature?")
    temp_direction = gets().chomp().to_i()
    puts("How much would you like to increase temperature?")
    temp_delta = gets().chomp().to_i()
    
    puts("Heating up the house to new temperature!")
    new_temperature = current_temp + temp_delta
    
elsif my_house_input == 0
    puts("Sorry this is not your house, quietly back away!")
    end