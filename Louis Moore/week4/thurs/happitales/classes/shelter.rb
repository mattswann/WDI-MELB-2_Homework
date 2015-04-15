class Shelter

  attr_accessor :clients, :animals

  def initialize (clients, animals)
    @clients = []
    @animals = []
  end

  def add_client(client)
    @clients << client
  end

  def add_animal(animal)
    @animals << animal
  end 
end
