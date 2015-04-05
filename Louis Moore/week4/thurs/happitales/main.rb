require 'pry'
require './classes/animal'
require './classes/client'
require './classes/shelter'

a1 = Animal.new('Spot', 14, 'Male', 'dog', 'none')
c1 = Client.new('Hannah', 0, 25)
s1 = Shelter.new

binding.pry