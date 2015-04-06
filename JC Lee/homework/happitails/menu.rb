require 'pry'

require_relative 'animal'
require_relative 'client'
require_relative 'shelter'

shelter = Shelter.new
puts "Welcome to Cody Perry Happitails."


def main_menu
  puts "(1). Display all animals"
  puts "(2). Dipslay all clients"
  puts "(3). Create an animal"
  puts "(4). Create a client"
  puts "(5). Client wanting to adopt"
  puts "(6). Client giving up for adoptation"
  puts "(7). Kill an animal?"
  puts "(Q). Quit"

  options = gets.chomp.downcase
end

def valid_options? options
  return true if options == "q"
  return false if options.to_i == 0
  return true if options.to_i <= 7
end

options = 0

while options.nil? || options != "Q"

  while !valid_options? options
    options = main_menu
  end

  case options.to_i
  when 3
    shelter.create_animal
  when 4
    shelter.create_client
  when 0
    exit 0
  else
    main_menu
  end
  options = main_menu
end



binding.pry



#binding.pry