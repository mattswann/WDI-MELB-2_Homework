require 'pry'

class Animal
  attr_accessor :owner
  attr_accessor :name, :age, :gender, :species, :toys

  def initialize name, age, gender, species, toys, owner
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
    @owner = ""
  end

  def add_toy
    puts "Enter to item to add"
    toy = gets.chomp.to_s
    @toys << toy

  end

end