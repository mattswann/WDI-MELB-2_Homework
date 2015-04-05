class Client
	attr_accessor :name, :children, :age, :pets

	def initialize(name, no_of_children, age, no_of_pets)
		@name = name
		@no_of_children = children
		@age = age
		@no_of_pets = pets
		@animals = []
	end

	def to_s
		"#{name}"
	end
end