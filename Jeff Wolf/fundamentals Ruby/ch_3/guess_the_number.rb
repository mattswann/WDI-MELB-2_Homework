secret_number = rand(0..10)

while true

    user_input = gets().chomp().to_i
    
    #if secret_number == user_input
    #puts("Well done..")
    #   break
    #else
    #   puts("try again...")
    #end
    
    if user_input < secret_number
        puts ("The number is but larger")
        elsif user_input > secret_number
        puts("The number is but smaller")
        else
        puts ("Well done, your a star!")
        break
    end

end