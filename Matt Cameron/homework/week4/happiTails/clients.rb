class Client
	attr_accessor :name, :children, :age, :pets

	def initialize(name, no_of_children, age, no_of_pets)
		@name = name.capitalize
		@no_of_children = no_of_children
		@age = age
		@no_of_pets = no_of_pets
		@pets = []
	end

	def to_s
		pet_names = @pets.map {|pet| pet.name}
		return "#{@name} has no pets yet." if pet_names.length == 0
		return "#{@name} owns #{pet_names[0]}" if pet_names.length == 1
		return "#{@name} owns #{pet_names[0]} & #{pet_names[1]}" if pet_names.length == 2
		return "#{@name} owns #{pet_names[0...-1].join(', ')} & #{pet_names[-1]}." if pet_names.length > 2
	end
end