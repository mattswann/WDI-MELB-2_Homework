puts("Enter a number")
first_number = gets().chomp().to_i()
    puts(first_number)

puts("Enter add, minus, multiply, divide")
operator = gets().chomp().to_i()
    puts(operator)

puts("Enter a second number")
second_number = gets().chomp().to_i()
    puts(second_number)

#puts("You have inputted", first_number, operator, second_number)

puts("To divide!")
    puts(first_number / second_number)

puts("To add!")
    puts(first_number + second_number)

puts("To multiply!")
    puts(first_number * second_number)

puts("To minus!")
    puts(first_number - second_number)