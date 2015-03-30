puts "Good day sir. Welcome to the pub"

print "How old are you? "
age = gets.chomp

puts (age.to_i >= 18) ? "Drink up!" : "Sorry mate, come back when you're older"

