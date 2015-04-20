class Client
  attr_accessor :name, :num_children, :age, :num_pets

  @@data = []
  @@all_names = []

  def initialize(name, num_children, age, num_pets=0)
    @name = name
    @num_children = num_children
    @age = age
    @num_pets = num_pets
    Relationship.new(self)
    @@data << self
    @@all_names << name
  end

  def animals
    Relationship.find_client(self.name).animals
  end

  def adopt(animal)
    Relationship.find_client(self.name).add_animal(animal)
    Animal.find(animal.name).status = "adopted"
  end

  def release(animal)
    Relationship.find_client(self.name).release_animal(animal)
    Animal.find(animal.name).status = "not adopted"
  end

  def self.has_animals
    @@data.select{|item| Relationship.find_client(item.name).animals != []}
  end

  def self.find(name)
    @@data.find {|item| item.name == name}
  end

  def self.all 
    @@data.each{|data| puts data}
  end

  def self.all_names
    @@all_names
  end

  def self.count
    @@data.count
  end

  def to_s
    "'#{name}' is #{age} years old with #{num_children} children"
  end

end