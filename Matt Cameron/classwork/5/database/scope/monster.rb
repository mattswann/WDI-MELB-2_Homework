class Monster


	def initialize(name)
		#instance variable
		@name = name

		#class variable
		@@count += 1

		#global variable
		$weather = "cloudy"

		#local variable
		hello = "hello"   #only accessible within this method
	end


end


# an instance of monster
m1 = Monster.new('bob')

# another instance
m2 = Monster.new('bebob')


#can call
Monster.count

#can't call
m1.count