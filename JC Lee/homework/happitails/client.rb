require 'pry'
require_relative 'animal'

class Client

  def initialize name, age, children, pets
    @name = name
    @children = children
    @age = age
    @pets = []
  end

  def add_pet
    puts "Enter pet name to add"
    pet = gets.chomp.to_s
    @pets << pet
  end

  def assign_owner_to_pet pet_name
    p "assigning pet to owner"
  end

  def to_s

  end

end