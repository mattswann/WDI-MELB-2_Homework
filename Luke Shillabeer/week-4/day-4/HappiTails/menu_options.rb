#---------------------------------------
# Helper Functions
#---------------------------------------

def clear_console()
  system "clear" or system "cls"
end

def wait_for_keypress()
  ask("Press any key to continue... ")
  clear_console()
end

#---------------------------------------
# Animal Choices menu functions
#---------------------------------------

def animal_choices_menu(shelter)
  system "clear" or system "cls"
  choose do |animal_menu|
    animal_menu.header = "Animal options"
    animal_menu.prompt = '> '

    animal_menu.choice(:list_animals) do
      animal_list_all(shelter)
    end
    animal_menu.choice(:animal_details) do
      animal_detail_menu(shelter)
    end
    animal_menu.choice(:add_animal) do
      animal_add_menu(shelter)
    end
    animal_menu.choice(:back) { clear_console() }
  end
end

def animal_detail_menu(shelter)
  animal_name_input = ask("Name of animal: ")
  animal = shelter.animals.find { |animal| animal.name == animal_name_input}
  puts(animal)
  wait_for_keypress()
end

def animal_add_menu(shelter)
  # get animal attributes
  animal_name = ask("Name: ")
  animal_age  = ask("Age: ", Integer) { |q| q.in = 0..105}
  animal_gender = ask("Gender: ")
  animal_species = ask("Species: ")
  animal_toys = ask("Toys: " "Interests?  (comma separated list)  ",
                    lambda { |str| str.split(',') } )

  # append animal to shelter animals
  animal = Animal.new(animal_name, animal_age, animal_gender, animal_species, animal_toys)
  shelter.add_animal(animal)

  # display prompt when successfully added
  # TODO: add actual validation
  puts "#{animal.name} has been added to the #{shelter.name} shelter DB."
  wait_for_keypress()
end

def animal_list_all(shelter)
  shelter.animals.each { |animal| puts animal }
  wait_for_keypress()
end

#---------------------------------------
# Client choices menu functions
#---------------------------------------

def client_choices_menu(shelter)
  system "clear" or system "cls"
  choose do |client_menu|
    client_menu.header = "Client options"
    client_menu.prompt = "> "

    client_menu.choice(:list_clients) do
      client_list_all(shelter)
    end
    client_menu.choice(:client_details) do
      client_detail_menu(shelter)
    end
    client_menu.choice(:list_client_animals) do
      client_list_animals(shelter)
    end
    client_menu.choice(:add_client) do
      client_add_menu(shelter)
    end
    client_menu.choice(:back) { clear_console() }
  end
end

def client_detail_menu(shelter)
  client_name_input = ask("Name of client: ")
  client = shelter.clients.find { |client| client.name == client_name_input}
  puts(client)
  wait_for_keypress()
end

def client_add_menu(shelter)
  # get client attributes
  client_name = ask("Name: ")
  client_num_children = ask("Number of Children: ", Integer) { |q| q.in = 0..30 }
  client_age = ask("Age: ", Integer) { |q| q.in = 0..105}
  client_num_pets = ask("Current number of pets: ", Integer) { |q| q.in = 0..30 }

  # append client to shelter clients
  client = Client.new(client_name, client_num_children, client_age, client_num_pets)
  shelter.add_client(client)

  # display prompt when successfully added
  # TODO: add actual validation
  puts "#{client.name} has been added to the #{shelter.name} shelter DB."
  wait_for_keypress()
end

def client_list_all(shelter)
  shelter.clients.each { |client| puts client }
  wait_for_keypress()
end

def client_list_animals(shelter)
  client_name_input = ask("Name of client: ")
  client = shelter.clients.find { |client| client.name == client_name_input}
  client.animals.each { |q| puts q }
  wait_for_keypress()
end

#---------------------------------------
# Adopt choices menu functions
#---------------------------------------

def adopt_choices_menu(shelter)
  system "clear" or system "cls"
  choose do |adopt_menu|
    adopt_menu.header = "Adopt options"
    adopt_menu.prompt  = "> "

    adopt_menu.choice(:client_adopts_animal) do
      adoptmenu_client_adopts(shelter)
    end
    adopt_menu.choice(:shelter_adopts_animal) do
      adoptmenu_shelter_adopts(shelter)
    end
  end
end

def adoptmenu_client_adopts(shelter)

  # get client that is adopting
  shelter.clients.each { |client| puts client }
  client_name = ask("Which client? ")
  clear_console()

  # get animal name
  puts "#{ client_name } selected..."
  shelter.animals.each { |animal| puts animal }
  animal_name = ask("Which animal? ")
  clear_console()

  # find the client and the animal; client adopts animal
  client = shelter.clients.find { |q| q.name == client_name }
  animal = shelter.animals.find { |q| q.name == animal_name }
  client.adopt_animal(animal)
  shelter.del_animal(animal)

  # print statement showing success
  puts "#{ client_name } has adopted #{ animal_name }."
  wait_for_keypress()
end

def adoptmenu_shelter_adopts(shelter)

  # get client that is returning animal
  shelter.clients.each { |client| puts client }
  client_name = ask("Which client? ")
  client = shelter.clients.find { |q| q.name == client_name }
  clear_console()

  # list client animals, get animal from client list of animals
  puts "#{ client_name } selected..."
  client.animals.each { |animal| puts animal }
  animal_name = ask("Which animal? ")
  animal = shelter.animals.find { |q| q.name == animal_name }

  # remove animal from owner, add into shelter
  client.del_animal(animal)
  shelter.add_animal(animal)

  # print statement showing success
  puts "#{ shelter.name } has adopted #{ animal_name } from #{ client_name }."
  wait_for_keypress()
end
