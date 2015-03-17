puts("Would you like to go up or down?")

up = gets().chomp().to_i()

puts("We are headed up the mountain!")
    puts(up)

down = gets().chomp().to_i()

puts("We are headed down into the cave!")
    puts(down)

#   Next is the number excercise!

puts("Pick a number between 0-100!")

number = gets().chomp().to_i

puts("What location were you born in?")

user_location = gets().chomp().to_i

if number < 20
    puts("We have conquered the Goon Squad of the [user_location]. It only took us [number] years!!!")
elsif number < 50
    puts("Its been a long passage! There is still hope that we will make it to the [user_location]. It took us [number] years!!!")
elsif number < 99
    puts("There are [number] goblins in the [user_location]. WE MUST FIGHT!!!!")
elsif number == 100
    puts("You've achieved enlightenment in the [user_location]. Spread the joy around the world!!!")

end

