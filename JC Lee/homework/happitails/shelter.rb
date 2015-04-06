require 'pry'
require_relative 'animal'
require_relative 'client'

# prefix data
a1 = Animal.new "stella",5,"f","chiwawa",[], ""
a2 = Animal.new "lessi",1,"m","bearded collie",["ball", "teddy"],""
a3 = Animal.new "max",2,"m","bloodhound",["cap", "ball"],""
a4 = Animal.new "lola",5,"f","golden retriever",[],""

c1 = Client.new "misty", 1, 23, []
c2 = Client.new "peter", 3, 35, []
c3 = Client.new "lin", 2, 33, []



class Shelter
  attr_accessor :animals, :clients
  def initialize
    @animals = {}
    @clients = {}
  end

  def create_animal
    puts "Enter the below information to create animal"
    print "Name : "
    name = gets.chomp

    print "Age : "
    age = gets.chomp

    print "Gender : (m/f) "
    gender = gets.chomp

    print "Species : "
    species = gets.chomp

    id = "a#{(get_length @animals) +1}"
    a = Animal.new name, age, gender, species, [], ""


    print "Add a toy for animal? (y/n)"
    add_toy = gets.chomp

    while add_toy == 'y'
      add_toy = a.add_toy

      print "Add a toy for animal? (y/n)"
      add_toy = gets.chomp
    end

    @animals[:"a#{(get_length @animals) +1}"] = a
  end

  def create_client
    puts "Enter the below information to create client"
    print "Name : "
    name = gets.chomp

    print "Age : "
    age = gets.chomp

    print "Does client have children? (y/n)"
    have_child = gets.chomp

    no_of_child = 0

    if have_child == 'y'
      print "Enter No of children : "
      no_of_child = gets.chomp.to_i
    end

    id = "c#{(get_length @animals) +1}"
    c = Client.new name, age, no_of_child, []

    print "Does client have any pets? (y/n)"
    have_pets = gets.chomp

    while have_pets == 'y'
      add_pet = c.add_pet

      print "Does client have any pets? (y/n)"
      have_pets = gets.chomp
    end

    @clients[:"c#{(get_length @animals) +1}"] = c
  end

  def get_length hash_to_check
    return hash_to_check.length
  end

  def display_all_animals animals

    #animals.selected
    animals.each do |animal, info|

      #puts "animal = #{animal} & key = #{key}"
      info.each do |key, value|
        binding.pry
        #puts "key = #{info[key]} & value = #{value}"
      end
    end
  end
end

shelter = Shelter.new

# shelter.animals << animal1 << animal2 << animal3 << animal4
# shelter.clients << client1 << client2 << client3

shelter.animals[:"a#{(shelter.get_length shelter.animals)+1}"] = a1
# shelter.display_all_animals shelter.animals
binding.pry











