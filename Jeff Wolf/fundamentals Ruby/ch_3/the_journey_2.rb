up = "We are headed up the mountain!!"
down = "We are headed down into the caves!!"

puts("up or down?")

if up = gets().chomp().to_i()
    puts("We are headed up the MOUNTAIN!")
elsif down = gets().chomp().to_i()
    puts("We are headed down into the CAVES!")
end