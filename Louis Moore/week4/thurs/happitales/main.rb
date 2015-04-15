require 'pry'
require './classes/animal'
require './classes/client'
require './classes/shelter'
#=======================================================
clients = []
animals = []
@s1 = Shelter.new
@s1.animals << animals
@s1.clients << clients
@selector = ''
#=======================================================
def menu
  
  until @selector == 'q'

  puts "        ---MENU---"
  puts " -----------------------"
  puts "|   A. Add client       |"
  puts "|   B. View clients     |"
  puts "|   C. Add animal       |"
  puts "|   D. View animals     |"
  puts "|   E. Assign animal    |"
  puts "|   F. Un-assign animal |"
  puts "|   Q. Quit             |"
  puts " -----------------------"

  @selector = gets.chomp.downcase

    if @selector == 'a'
      add_client(@s1)
    elsif @selector == 'b'
      display_clients
    elsif @selector == 'c'
      add_animal(@s1)
    elsif @selector == 'd'
      display_animals
    elsif @selector == 'e'
    end

  end
end
#=======================================================
def add_animal (shelter)

  file = File.open('animals.txt', 'a+') do |file|

    puts "Enter name:"
    name = gets.chomp

    puts "Enter age:"
    age = gets.chomp.to_i

    puts "Enter gender:"
    gender = gets.chomp

    puts "Enter species"
    species = gets.chomp

    puts "Toys / additional comments"
    toys = gets.chomp

    file.puts "#{name}, #{age}, #{gender}, #{species}, #{toys}"
    file.close
    new_animal = Animal.new(name, age, gender, species, toys)
    shelter.animals << new_animal
  end

    ##access animal from file or something
    file = File.open('animals.txt', 'r') do |file|

    file.each do |line|
    data = line.split(',')
    animal = Animal.new(data[0], data[1], data[2], data[4], data[5])
    animals << animal
  
end

    puts 'Animal added...'

    return menu
    
  end
end

def display_animals
  line_num=0
  text=File.open('animals.txt').read
  text.gsub!(/\r\n?/, "\n")
  
  text.each_line do |line|
  print "#{line_num += 1} #{line}"
  end  
end

def add_client (shelter)
  
  file = File.open('clients.txt', 'a+') do |file|

    puts "Clients name"
    name = gets.chomp

    puts "Clients age"
    age = gets.chomp.to_i

    puts "Children?" 
    children = gets.chomp

    file.puts "#{name}, #{age}, #{children}"
    file.close
    new_client = Client.new(name, age, children)
    shelter.clients << new_client

    puts 'Client added...'

    return menu

  end
end

def display_clients
  line_num=0
  text=File.open('clients.txt').read
  text.gsub!(/\r\n?/, "\n")
  
  text.each_line do |line|
  print "#{line_num += 1} #{line}"
  end
end

def add_relationship

  puts "Select an animal to assign"
  display_animals
  animal_select = gets.chomp.to_i


  file = File.open('animals.txt', 'r') do |file|

    file.each do |line|
      data = line.split('')
      #selected = Person.new(data[animal_select])
      puts data[animal_select]
    end
    
  end

  puts "Select adopting client"
  client_select = gets.chomp.to_i

end



    file = File.open('animals.txt', 'r') do |file|

    file.each do |line|
    data = line.split(',')
    animal = Animal.new(data[0], data[1], data[2], data[4], data[5])
    animals << animal
  end 
end


#=======================================================
binding.pry


