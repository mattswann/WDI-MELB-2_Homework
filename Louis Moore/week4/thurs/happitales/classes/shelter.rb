class Shelter

  attr_accessor :clients, :animals

  def initialize (clients, animals)
    @clients = clients
    @animals = animals
  end

  def clients=(value)
    @clients = value
  end

  def animals=(value)
    @animals = value
  end
end
