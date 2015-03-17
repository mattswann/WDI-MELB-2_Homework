var1 = 'stop'
var2 = 'stressed'
var3 = 'Can you pronounce this sentance backwards?'

puts var1.reverse
puts var2.reverse
puts var3.reverse
puts var1
puts var2
puts var3

puts 'What is your full name?'
name = gets.chomp
puts 'Did you know there are  ' + name.length.to_s +
    ' characters in your name, ' + name + '?'