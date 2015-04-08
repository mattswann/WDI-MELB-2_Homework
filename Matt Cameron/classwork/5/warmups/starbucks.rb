#https://gist.github.com/mattswann/3d65f4c1a4a38d97e441

require 'pry'
require_relative 'coffee'

puts "Welcome to Bond St Kitchen"

c1 = Coffee.new('latte','2 sugars','medium','Darryl')
c2 = Coffee.new('cappuccino', '0 sugars', 'large', 'Jessica')


puts c1
puts c2

binding.pry