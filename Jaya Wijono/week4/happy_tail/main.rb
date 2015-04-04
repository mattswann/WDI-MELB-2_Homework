require './animal'
require './client'
require './shelter'
require './relationship'
require 'pry'

# set all client and animal objects inside happy tail shelter
happy_tail = Shelter.new(Client.all,Animal.all)


# Read file from database and create animal, client, and relationship objects
file = File.open('animal_database.txt','r')
  file.each do |line|
    data = line.split(',')
    Animal.new(data[0],data[1],data[2],data[3],data[4],data[5])
  end
file.close

file = File.open('client_database.txt','r')
  file.each do |line|
    data = line.split(',')
    Client.new(data[0],data[1],data[2],data[3])
  end
file.close

file = File.open('relationship_database.txt','r')
  file.each do |line|
    data = line.split(';')
    animal_data = data[1].split(',').each{|item| item.gsub!(/\W+/, '').gsub!('_',' ')}
    Relationship.find_client(data[0]).animals = Animal.select(animal_data)
  end
file.close

# Validaiton helper function
def validate_client(selected_client)
  while !(Client.all_names.include? selected_client)
    print "type in the name of the client from the list to select: "
    selected_client = gets.chomp 
    return selected_client if Client.all_names.include? selected_client
  end
end

def validate_animal(selected_animal)
  while !(Animal.all_names.include? selected_animal)
    print "type in the name of the animal from the list to select: "
    selected_animal = gets.chomp 
    return selected_animal if Animal.all_names.include? selected_animal
  end
end

def validate_adopted_animal(available_animals_names, selected_animal)
  while !(available_animals_names.include? selected_animal)
    print "type in the name of the animal from the list to select: "
    selected_animal = gets.chomp 
    return selected_animal if available_animals_names.include? selected_animal
  end
end

# In-game menu
while true
puts "==============================="
puts "Welcome to Happy Tail Shelter"
puts "==============================="
puts "1. Display all animals"
puts "2. Display all clients"
puts "3. Create an animal"
puts "4. Create a client"
puts "5. Facilitate client adopts an animal"
puts "6. Facilitate client puts an animal up for adoption"
puts "7. exit"
puts "-----------------------------------------------------"
print "choose menu option: "
user_option = gets.chomp.to_i
case user_option
  when 1 #Display all animals
    happy_tail.animals.each{|animal| puts animal}
  when 2 #Display all clients
    happy_tail.clients.each{|client| puts client}
  when 3 #Create an animal
    print "What is the name of the animal? "
    animal_name = gets.chomp
    print "What is the age of the animal? "
    animal_age = gets.chomp
    print "What is the gender of the animal? "
    animal_gender = gets.chomp
    print "What is the species of the animal? "
    animal_species = gets.chomp
    new_animal = Animal.new(animal_name, animal_age, animal_gender, animal_species)
  when 4 #Create a client
    print "What is the name of the client? "
    client_name = gets.chomp
    print "How many children the client have? "
    client_num_children = gets.chomp
    print "What is the age of the client? "
    client_age = gets.chomp
    print "How many pets the client have? "
    client_num_pets = gets.chomp
    new_client = Client.new(client_name, client_num_children, client_age, client_num_pets)
  when 5 #Facilitate client adopts an animal
    selected_client = ''
    selected_animal = ''
    puts "Client list: "
    puts "----------------------------------------------"
    happy_tail.clients.each{|client| puts "# #{client}"}
    puts "----------------------------------------------"
    print "type in the name of the client to select: "
    selected_client = Client.find(validate_client(selected_client))
    puts "Available animals to adopt: "
    puts "----------------------------------------------"
    available_animals = happy_tail.animals.select{|item| item.status == "not adopted"}
    available_animals.each{|animal| puts "# #{animal}"}
    puts "----------------------------------------------"
    print "type in the name of the animal to select: "
    selected_animal = Animal.find(validate_animal(selected_animal))
    selected_client.adopt selected_animal
  when 6 #Facilitate client puts an animal up for adoption
    selected_client = ''
    selected_animal = ''
    puts "Client list: "
    puts "----------------------------------------------"
    Client.has_animals.each{|client| puts "# #{client}"}
    puts "----------------------------------------------"
    selected_client = Client.find(validate_client(selected_client))
    puts "Select animals to put for adoption: "
    puts "----------------------------------------------"
    available_animals = selected_client.animals
    available_animals.each{|animal| puts "# #{animal}"}
    puts "----------------------------------------------"
    print "type in the name of the animal to select: "
    available_animals_names = available_animals.map{|animal| animal.name}
    selected_animal = Animal.find(validate_adopted_animal(available_animals_names, selected_animal))
    selected_client.release selected_animal
  when 7 # Save file and exit

    # Saving all objects into database
    File.open('client_database.txt', 'w') do |file|
      Client.all.each do |client|
        file.puts "#{client.name},#{client.num_children},#{client.age},#{client.num_pets},"
      end
    end
    File.open('animal_database.txt', 'w') do |file|
      Animal.all.each do |animal|
        file.puts "#{animal.name},#{animal.age},#{animal.gender},#{animal.species},#{animal.toys},#{animal.status},"
      end
    end
    File.open('relationship_database.txt', 'w') do |file|
      Relationship.all.each do |relationship|
        if relationship.animals == []
          file.puts "#{relationship.client.name};#{relationship.animals};"
        else
          animals_names = relationship.animals.map{|animal| animal.name.split(' ').join('_')}
          file.puts "#{relationship.client.name};#{animals_names};"
        end
      end
    end

    #exit
    break
  else
    puts "please input the number of the option!"
  end
end

