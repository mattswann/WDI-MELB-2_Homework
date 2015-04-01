require 'pry'
require './building'
require './apartment'
require './person'

def add_person(apartment)
	print "Name: "
	name = gets.chomp

	print "Age: "
	age = gets.chomp

	print "Gender: "
	gender = gets.chomp

	apartment.renters << Person.new(name, age, gender, {})
	apartment.is_occupied = true
end

def add_apartment(building)
	print "Price: "
	price = gets.chomp.to_f

	print "is_occupied: (y/n) "
	is_occupied = gets.chomp == 'y'

	print "Square Feet: "
	sqft = gets.chomp.to_i

	print "Number of beds: "
	num_beds = gets.chomp.to_i

	print "Number of bathrooms: "
	num_baths = gets.chomp.to_i

	@buildings[building].apartments << Apartment.new(price, is_occupied, sqft, num_beds, num_baths, [])
end

def add_building(name)
	print "Address: "
	address = gets.chomp

	print "Style: "
	style = gets.chomp

	print "Does it have a doorman? (y/n) "
	has_doorman = gets.chomp == 'y'

	print "Does it have an elevator? (y/n) "
	is_walkup = gets.chomp == 'n'

	print "How many floors? "
	num_floors = gets.chomp.to_i

	@buildings[name] = Building.new(address, style, has_doorman, is_walkup, num_floors, [])

end

@buildings = {}


b1 = Building.new("120 Queen Street", "Gothic", false, false, 10, [])

a1 = Apartment.new(199.99, true, 90, 2, 1, [])
a2 = Apartment.new(199.99, true, 90, 2, 1, [])
a3 = Apartment.new(500.00, false, 150, 4, 3, [])

frank = Person.new("Frank", 67, "male", a1)
paul = Person.new("Paul", 27, "male", a2)
steve = Person.new("Steve", 26, "male", a2)

a1.renters << frank
a2.renters << paul << steve

b1.apartments << a1 << a2 << a3

puts b1
puts a1
puts a2
puts a3

binding.pry