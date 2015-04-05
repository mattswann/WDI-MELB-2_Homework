# https://gist.github.com/epoch/69ce72204a35f72da045

require 'pry'
require_relative 'animals'
require_relative 'clients'
require_relative 'shelter'

animals = []
clients = []
animals << Animal.new("Wilfred", 5, "male", "dog")
animals << Animal.new("Lockie", 16, "male", "dog")

puts "What would you like to do? "
	puts "1. Add an animal"
	puts "2. List all animals"
	puts "3. Add a client"
	puts "4. List all clients"
	input = gets.chomp

until input == "q"

	if input == "1"
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


	elsif input == "2"
		animals.each {|animal| puts animal}

	elsif input == "3"
		print "Name: "
		name = gets.chomp

		print "Number of children: "
		children = gets.chomp

		print "Age: "
		age = gets.chomp.to_i

		print "Number of pets: "
		pets = gets.chomp.to_i

		clients << Client.new(name, children, age, pets)

	elsif input == "4"
		clients.each {|client| puts client}

	else
		puts "Sorry, say again..."
	end

	puts ""
	puts "What would you like to do? "
	puts "1. Add an animal"
	puts "2. List all animals"
	puts "3. Add a client"
	puts "4. List all clients"
	input = gets.chomp

end




