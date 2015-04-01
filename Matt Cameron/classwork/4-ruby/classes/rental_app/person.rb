class Person
	# belongs_to :apartments

	attr_accessor :name, :age, :gender, :apartment

	def initialize(name, age, gender, apartment)
		@name = name
		@age = age
		@gender = gender
		@apartment = apartment
	end

	def to_s
		"#{@name}"
	end
end