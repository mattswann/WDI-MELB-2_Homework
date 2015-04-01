require 'pry'

fish1 = {
	name: "Nemo",
	health: 100,
	speed: 5
}

shark = {
	name: 'Bruce',
	health: 5000,
	speed: 15
}

ocean_world = []

ocean_world << fish1 << shark

def move_fish(fish)
	# move fish around

end

def move_shark(shark)
	# move the shark around

end

def move_octopus(octopus)

end



class	Fish

	def initialize(name, health, speed)
		@name = name
		@health = health
		@speed = speed
	end

	# read only
	def health
		@health
	end

	def speed
		@speed
	end

	def name
		@name
	end

	# write
	def health=(value)
		@health = value
	end

	def speed=(value)
		@speed = value
	end

	def sleep
		@health += 10
	end

	def attack(fish)
		fish.health -= 10
	end

	def pretty_output
		"#{@name} is a pretty fish"
	end

	def to_s
		"#{@name} is a pretty fish"
	end

end

f1 = Fish.new("Nemo", 50, 10)
f2 = Fish.new("Bruce", 2000, 30)
f3 = Fish.new("Frank", 15, 2)


class World

	def initialize(params)
		@ocean = []
		params.each {|fish| @ocean << fish}
	end

	def ocean
		@ocean
	end

	def add_fish(fish)
		@ocean << fish
	end
end

world = World.new([f1, f2, f3])


binding.pry