# Intro to Active Record

require 'active_record'


# connect to the database of your choice
ActiveRecord::Base.establish_connection(
	:adapter => 'postgresql',
	:database => 'goodfoodhunting'
)

# Look for a table called 'dishes'
class Dish < ActiveRecord::Base
end


# Now we can access everything in the dishes table! Woohoo!  :)

	# some examples

	# show some info about dishes
	Dish

	# show everything in the database
	Dish.all

	# count the number of rows
	Dish.count

	# assign the rows to a variable  (array)
	list = Dish.all

	# grab a single dish and assign it to a variable
	single_dish = list[0]

	# find a specific row/dish by id
	Dish.find(5)

	# find something directly
	Dish.where( name: "Apple")

	# create a new dish
	Dish.create( name: "Feet", image_url: "http://image.com/image.jpg" )

	# Delete a specific dish
	unwanted_dish = Dish.where :name => "Apple"
	unwanted_dish.delete   # or unwanted_dish.destroy

	# Update a specific dish
	edit_dish = Dish.where name: "Brownie"
	edit_dish.name = "Brownies"
	edit_dish.save 				# MUST REMEMBER TO SAVE IT TO THE DATABASE