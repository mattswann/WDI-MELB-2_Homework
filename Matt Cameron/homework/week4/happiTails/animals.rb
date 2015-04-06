class Animal
	attr_accessor :name, :age, :gender, :species, :toys

	def initialize(name, age, gender, species)
		@name = name.capitalize
		@age = age
		@gender = gender.downcase
		@species = species.downcase
		@toys = []
	end

	def to_s
		"#{@name} the #{@species} is #{@age} years old."
	end


end