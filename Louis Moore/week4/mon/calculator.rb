def chardelay(var)

  var.each_char do |c|
    sleep 0.01
    print c
  end
end

operator = ''


  puts ""

  sleep(0.1)
    chardelay("Welcome to the Calc-ula-tron 2000".upcase)
  puts " " 
  puts chardelay("Initializing").center(25)
  chardelay("...................")
  puts ""
  chardelay("................")
  puts ""
  chardelay(".............")
  puts ""
  chardelay("..........")
  puts ""
  chardelay(".......")
  puts ""
  chardelay("....")
  puts ""
  chardelay("..")
  puts ""
  chardelay(".")
  puts ""

  puts " "
  puts "        BLING!"
  puts " "


until operator == 'q'


  puts " "
  puts "      ---MENU---"
  sleep(0.1)
  puts "-----------------------"
  sleep(0.1)
  puts "|   A. ADDITION       |"
  sleep(0.1)
  puts "|   B. SUBTRACTION    |"
  sleep(0.1)
  puts "|   C. DIVISION       |"
  sleep(0.1)
  puts "|   D. MULTIPLICATION |"
  sleep(0.1)
  puts "|   E. EXPONENT       |"
  sleep(0.1)
  puts "|   F. SQUARE ROOT    |"
  sleep(0.1)
  puts "|   Q. QUIT           |"
  sleep(0.1)
  puts "-----------------------"
  sleep(0.1)

  sleep (1.0)

  puts ""

  puts "Select an operator (A, B, C, D, E, F or Q to quit)".upcase


  operator = gets.chomp.downcase


  if operator == 'q'
    puts "exiting Calc-ula-tron 2000".upcase
    exit(0)
  end


  if operator == "a"
    puts "You have selected addition".upcase
  elsif operator == "b"
    puts "You have selected subtraction".upcase
  elsif operator == "c"
    puts "You have selected division".upcase
  elsif operator == "d"
    puts "You have selected multiplication".upcase
  elsif operator == "e"
    puts "You have selected exponent".upcase
  elsif operator == "f"
    puts "You have selected square root".upcase
  end

  sleep(1)
  puts "Enter an interger".upcase
  number1 = gets.chomp.to_i

  sleep(1)
  puts "Enter a second interger".upcase
  number2 = gets.chomp.to_i


def thegoodstuff(value, operator, value2)

  if operator == "a"
    return value + value2
  elsif operator == "b"
    puts "YOURS ANSWER IS:"
    return value - value2
  elsif operator == "c"
    puts "YOURS ANSWER IS:"    
    return value / value2
  elsif operator == "d"
    puts "YOURS ANSWER IS:"    
    return value * value2
  elsif operator == "e"
    puts "YOURS ANSWER IS:"
    return  value ** value2
    puts "YOURS ANSWER IS:"

  elsif operator == "f"
    puts "YOURS ANSWER IS:"    
    return Math.sqrt(value)
    
  end

end

puts thegoodstuff(number1, operator, number2)

end