require 'pry'
require_relative 'dog'

class Animal
  attr_accessor :name,:age, :gender, :species, :toys, :owner

  def initialize(name, age, gender, species, toys)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = toys
    @owner = {}
  end

  def to_s
    description = "#{@name} is a #{@age} year old #{@gender} #{@species}."
    if @owner.size > 0
      description = description + " #{@name} is owned by #{@owner.keys[0]}."
    end
    if @toys.size > 0
      description = description + " #{@name} has #{@toys.size} toy(s)."
    end

    description
  end

end

class Client
  attr_accessor :name, :age, :num_kids, :num_pets, :pets

  def initialize(name, age, num_kids)
    @name = name
    @age = age
    @num_kids = num_kids
    @num_pets = 0
    @pets = {}
  end

  def to_s
    description = "#{@name} is #{@age} and has #{@num_kids} children."
    if @pets.size > 0
      description = description + " #{@name} has #{@pets.size} pet(s): #{@pets.keys.join(", ")}."
    end
    description
  end

end

$shelter = {
  clients: {},
  animals: {}
}

def add_to_shelter(entity_type, entity)
  $shelter[(entity_type + 's').to_sym][entity.name.to_sym] = entity
end

def create_animal
  puts "Enter the animal's details."
  print "Name: "
  name = gets.chomp
  print "Species: "
  species = gets.chomp
  print "Gender ('male'/'female'/'other'): "
  gender = gets.chomp
  print "Age: "
  age = gets.chomp.to_i
  print "Does #{name} have any toys? (y/n) "
  add_toy = gets.chomp.downcase
  toys = []
  while add_toy == 'y'
    print "Toy: "
    toys << gets.chomp
    print "Add another toy? (y/n) "
    add_toy = gets.chomp.downcase
  end
  
  puts "New animal #{name} added."
  Animal.new(name, age, gender, species, toys)
end

def create_client
  puts "Enter the client's details."
  print "Name: "
  name = gets.chomp
  print "Age: "
  age = gets.chomp.to_i
  print "Number of children: "
  num_kids = gets.chomp.to_i

  puts "New client #{name} added."
  Client.new(name, age, num_kids)
end

def validate_entity(name, entity_type)
  if $shelter[(entity_type + 's').to_sym][name.to_sym].nil?
    puts "#{name} isn't in the shelter #{entity_type} list."
    false
  else
    true
  end
end

def adopt(animal_name, owner_name)

  if !validate_entity(animal_name, "animal")
    return
  else 
    animal = $shelter[:animals][animal_name.to_sym]
  end
  
  if !validate_entity(owner_name, "client")
    return
  else 
    owner = $shelter[:clients][owner_name.to_sym]
  end

  owner.pets[animal.name.to_sym] = animal
  owner.num_pets = owner.pets.size
  animal.owner[owner.name.to_sym] = owner
  puts "#{owner_name} has adopted #{animal_name}."
end

def surrender(animal_name, owner_name)
  
  if !validate_entity(animal_name, "animal")
    return
  else 
    animal = $shelter[:animals][animal_name.to_sym]
  end
  
  if !validate_entity(owner_name, "client")
    return
  else 
    owner = $shelter[:clients][owner_name.to_sym]
  end

  owner.pets.delete(animal_name.to_sym)
  animal.owner.delete(owner_name.to_sym)
  puts "#{owner_name} has surrendered #{animal_name}."
end

def init_menu
  puts "Welcome to the Furry Haven Administration Tool (FHAT)"
  dog
  display_menu_choices
end

def display_menu_choices
  puts "   ***   "
  puts "Make a choice from the menu:"
  puts "1. Display animals"
  puts "2. Display clients"
  puts "3. Add animal"
  puts "4. Add client"
  puts "5. Animal adoption"
  puts "6. Animal surrender"
  puts "7. Exit"
  print ">>> "
  execute_menu_choice(gets.chomp.to_i)
end

def execute_menu_choice(choice)
  case choice
  when 1
    $shelter[:animals].values.each do |animal|
      puts animal
    end
  when 2
    $shelter[:clients].values.each do |client|
      puts client
    end
  when 3
    animal = create_animal
    add_to_shelter("animal", animal)
  when 4
    client = create_client
    add_to_shelter("client", client)
  when 5
    print "Animal to adopt: "
    animal = gets.chomp
    print "Owner adopting #{animal}: "
    owner = gets.chomp
    adopt(animal, owner)
  when 6
    print "Animal to surrender: "
    animal = gets.chomp
    print "Owner surrendering #{animal}: "
    owner = gets.chomp
    surrender(animal, owner)
  when 7
    puts "Goodbye."
    exit(0)
  else
    puts "Choice not recognised."
  end

  display_menu_choices
end

# move validation into menu and loop (plus add check if no animals/clients)

# seed some info

puts "Seeding information..."
add_to_shelter("animal", Animal.new("Dodge", 1, "male", "dog", ["bear", "rope toy"]))
add_to_shelter("animal", Animal.new("Diesel", 9, "male", "dog", ["ball", "stick"]))
add_to_shelter("animal", Animal.new("Banjo", 11, "male", "horse", []))
add_to_shelter("animal", Animal.new("Spider", 4, "male", "cat", ["bell"]))
add_to_shelter("client", Client.new("Taryn", 22, 0))
add_to_shelter("client", Client.new("Rilie", 18, 0))
add_to_shelter("client", Client.new("Santa", 65, 2))
adopt("Dodge", "Taryn")
adopt("Banjo", "Taryn")
adopt("Diesel", "Rilie")
adopt("Spider", "Santa")
surrender("Spider", "Santa")

init_menu
