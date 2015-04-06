require 'pry'
require './classes/animal'
require './classes/client'
require './classes/shelter'

a1 = Animal.new('Spot', 14, 'Male', 'dog', 'none')
c1 = Client.new('Hannah', 0, 25)
s1 = Shelter.new([], [] )

s1 << 

#=======================================================
def add_animal (shelter)

  file = File.open('database.txt', 'a+') do |file|


    print "Add a new animal? (y or n)"
    response = gets.chomp.downcase

    while response == "y"

      print "Enter name:"
      name = gets.chomp

      print "Enter age:"
      age = gets.chomp.to_i

      print "Enter gender:"
      gender = gets.chomp

      print "Enter species"
      species = gets.chomp

      print "Toys / additional comments"
      toys = gets.chomp

      file.puts "#{name}, #{age}, #{gender}, #{species}, #{toys}"
      new_animal = Animal.new(name, age, gender, species, toys)
      shelter << new_animal

      print "Add another animal? (y / n)"
      response = gets.chomp.downcase
  
    end
  end
end

def display_animals
end

def add_client (shelter)
  
  file = File.open('database.txt', 'a+') do |file|

    print "Add a client? (y / n)"
    response = gets.chomp.downcase

    while response == 'y'

      print "Clients name"
      name = gets.chomp

      print "Clients age"
      age = gets.chomp_to.i

      print "Children?"
      children = gets.chomp

      file.puts "#{name}, #{age}, #{children}"
      new_client = Client.new(name, age, children)
      shelter << new_client

      print "Add another client? (y / n)"
      response = gets.chomp.downcase

    end
  end
end

def addRelationship
end

#=======================================================
binding.pry
