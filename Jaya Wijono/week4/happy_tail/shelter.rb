class Shelter
  attr_accessor :clients, :animals

  @@data = []

  def initialize(clients, animals)
    @clients = clients
    @animals = animals
    @@data << self
  end

  def self.all 
    @@data
  end

  def self.count
    @@data.count
  end

end