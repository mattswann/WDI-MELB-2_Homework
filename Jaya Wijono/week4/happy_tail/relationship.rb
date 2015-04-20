class Relationship
  attr_accessor :client, :animals

  @@data = []

  def initialize(client, animals=[])
    @animals = []
    @client = client
    @animals << animals if animals != []
    @@data << self
  end

  def self.find_client(name)
    @@data.find {|item| item.client.name == name}
  end

  def add_animal(animal)
    if self.animals.include? nil
      self.animals = [animal]
    else
      self.animals << animal
    end
  end

  def release_animal(animal)
    self.animals.slice!(self.animals.index(animal))
  end

  def self.all 
    @@data
  end

  def self.count
    @@data.count
  end

end