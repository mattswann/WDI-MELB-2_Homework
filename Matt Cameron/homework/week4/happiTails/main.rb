# https://gist.github.com/epoch/69ce72204a35f72da045

require 'pry'
require_relative 'animals'
require_relative 'clients'
require_relative 'shelter'

animals = []
clients = []
animals_needing_homes = []

# a1 = Animal.new("Wilfred", 5, "male", "dog")
# a2 = Animal.new("Lockie", 16, "male", "dog")
# a3 = Animal.new("Sophie", 16, "female", "cat")
# a4 = Animal.new("Myrtle", 4, "female", "turtle")
# animals << a1 << a2 << a3 << a4
# animals_needing_homes << a4

# c1 = Client.new("Bob", 2, 35, 2)
# c2 = Client.new("Steve", 0, 24, 1)
# clients << c1 << c2

# c1.pets << a1 << a2
# c2.pets << a3

def main_menu
	puts ""
	puts "############## WELCOME TO HAPPITAILS ##################"
	puts "What would you like to do? "
	puts "1. List all animals"
	puts "2. List all clients"
	puts "3. List animals needing homes"
	puts "------------------------------"
	puts "4. Add an animal"
	puts "5. Add a client"
	puts "6. Adopt an animal"
	puts "7. Put animal up for adoption"
	puts "Press 'q' to quit"
	@input = gets.chomp
end


until @input == "q"

	case @input
	when "1"
		if animals.length == 0
			puts "There are no animals here yet... :("
		else
			animals.each {|animal| puts animal}
		end

	when "2"
		if clients.length == 0
			puts "There are no clients here yet... :("
		else
			clients.each {|client| puts client}
		end

	when "3"
		if animals_needing_homes.length == 0
			puts "No animals need homes right now :)"
		else
			animals_needing_homes.each {|animal| puts animal}
		end

	when "4"
		print "Name: "
		name = gets.chomp

		print "Age: "
		age = gets.chomp

		print "Gender: "
		gender = gets.chomp

		print "Species: "
		species = gets.chomp

		new_animal = Animal.new(name, age, gender, species)
		animals << new_animal
		animals_needing_homes << new_animal

		puts "#{name} the #{species} has been added to the system."

	when "5"
		print "Name: "
		name = gets.chomp

		print "Number of children: "
		children = gets.chomp

		print "Age: "
		age = gets.chomp.to_i

		print "Number of pets: "
		pets = gets.chomp.to_i

		clients << Client.new(name, children, age, pets)

		puts "#{name} has been added to the system."

	when "6"
		if animals_needing_homes.length == 0
			puts "I'm sorry, there are no animals to adopt right now."
		else
			puts "Pick an animal to adopt out: "
			animals_needing_homes.each {|animal| puts animal}
			tmp = gets.chomp.capitalize
			chosen_animal = animals.find {|animal| animal.name == tmp}

			puts "Which client is adopting #{chosen_animal.name}? "
			clients.each {|client| puts client}
			tmp = gets.chomp.capitalize

			chosen_client = clients.find {|client| client.name == tmp}
			chosen_client.pets << chosen_animal

			animals_needing_homes.slice!(animals_needing_homes.index(chosen_animal))

			puts "SUCCESS!! #{chosen_animal.name} will be happy living with #{chosen_client.name}!"
		end

	when "7"
		if clients.length == 0 || animals.length == 0
			puts "Please create an animal before putting it up for adoption"
		else
			puts "Which client wants to put an animal up for adoption?"
			clients.each {|client| puts client}
			tmp = gets.chomp.capitalize
			chosen_client = clients.find {|client| client.name == tmp}


			#List that client's animals if more than 1 animal
			puts "Which animal needs a new home?"
			chosen_client.pets.each {|pet| puts pet.name}
			tmp = gets.chomp.capitalize

			chosen_animal = animals.find {|animal| animal.name == tmp}

			animals_needing_homes << chosen_animal
			chosen_client.pets.slice!(chosen_client.pets.index(chosen_animal))

			puts "Okay, #{chosen_animal.name} is now available for adoption."
		end

	else
		puts "Sorry, say again..."
	end

main_menu

end

puts "Thanks for stopping by at HappiTails!"