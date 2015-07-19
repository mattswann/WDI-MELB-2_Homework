require 'pry'

class Fish
  def initialize(name, health, speed)
    @name   = name   || "GENERIC FISH"
    @health = health || 100
    @speed  = speed  || 5
  end

  def name
    @name
  end

  def health
    @health
  end

  def health=(value)
    @health = value
  end

  def speed
    @speed
  end

  def speed=(value)
    @speed = value
  end

  def fish_get_hit
    @health -= 10
  end
end

class World

  def initialize
    @ocean = []
  end

  def ocean()
    @ocean
  end

  def add_fish(fish)
    @ocean << fish
  end

end

f1 = Fish.new(nil, nil, nil)
f2 = Fish.new(nil, nil ,nil)

w1 = World.new()

w1.add_fish f1
w1.add_fish f2

binding.pry
