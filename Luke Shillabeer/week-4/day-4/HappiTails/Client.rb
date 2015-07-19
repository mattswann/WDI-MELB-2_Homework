class Client
  attr_reader :name, :num_children, :age, :num_pets, :animals

  def initialize(name, num_children, age, num_pets)
    @name = name
    @num_children = num_children
    @age = age
    @num_pets = num_pets
    @animals = []
  end

  def to_s
    "#{@name} is a #{@age} year old with #{@num_children} children and #{@num_pets} pets."
  end

  def adopt_animal(animal)
    @animals.push animal
    @num_pets += 1
  end

  def del_animal(animal)
    @animals.delete_if { |obj| obj == animal }
    @num_pets -= 1
  end
end
