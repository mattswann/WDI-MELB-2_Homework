require 'pry'
require './robot'

puts "Robot 1: "
robot1 = Robot.new
puts robot1.name
puts robot1.mac_address
puts robot1.timers

binding.pry
