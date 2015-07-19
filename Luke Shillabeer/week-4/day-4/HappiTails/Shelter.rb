class Shelter
  attr_accessor :name
  attr_reader :clients, :animals

  def initialize(name)
    @name    = name
    @clients = []
    @animals = []
  end

  def add_client(client)
    @clients.push(client)
  end

  def del_client(client)
    @clients.delete_if { |obj| obj == client }
  end

  def add_animal(animal)
    @animals.push(animal)
  end

  def del_animal(animal)
    @animals.delete_if { |obj| obj == animal }
  end
end
