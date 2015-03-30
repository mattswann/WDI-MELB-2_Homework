#--------------------------------
# Q1
#--------------------------------

print "What is your age? "
user_age = gets.chomp

if user_age < 18
  puts "Plz, you are very young."
else
  puts "You're super old."
end

#--------------------------------
# Q2
#--------------------------------

print "What is the current temperature? "
current_temp = gets.chomp

print "Does the aircon work? "
aircon = gets.chomp

print "What temperature do you WISH it was? "
wish_temp = gets.chomp

if aircon == "functional" && current_temp > wish_temp
  puts "Aircon on plz"
elsif aircon != "functional" && current_temp > wish_temp
  puts "Fix the aircon quickly, it's hot!"
elsif aircon != "functional" && current_temp <= wish_temp
  puts "Fix the aircon, but at your leisure."
else
  puts "Well I'm confused about what you want now."
end

#--------------------------------
# Q3
#--------------------------------

print "Yo, where yo live?"
suburb = gets.chomp

if suburb == "Parkdale" || suburb == "Parkville"
  puts "Hey cool we lived in the same suburb!"
else
  puts "Your suburb is bad and you should feel bad."
end
