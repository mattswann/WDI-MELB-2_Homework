class Animal
  attr_accessor :name, :age, :gender, :species, :toys, :status

  @@data = []
  @@all_names = []

  def initialize(name, age, gender, species, toys=[], status='not adopted')
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = toys
    @status = status
    @toys = toys if toys != []
    @@data << self
    @@all_names << name
  end

  def self.find(name)
    @@data.find {|item| item.name == name}
  end

  def self.select(names)
    names.map{|name| self.find(name)}
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
    if self.status == 'adopted'
      animal_adopted_owner = Relationship.all.select{|relationship| relationship.animals.include? self}.first.client.name
      "'#{name}' is #{age} years old #{gender} #{species}, is currently '#{status}' by #{animal_adopted_owner}"
    else
      "'#{name}' is #{age} years old #{gender} #{species}"
    end
  end

end