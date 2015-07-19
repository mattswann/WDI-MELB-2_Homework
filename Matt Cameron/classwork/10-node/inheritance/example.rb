class User

	attr_accessor :firstname, :lastname

	def initialize(first, last)
		@firstname = first
		@lastname = last
	end

	def full_name
		"#{@firstname} #{@lastname}"
	end

end