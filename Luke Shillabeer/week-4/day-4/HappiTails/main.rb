# built from this spec -
# https://gist.github.com/epoch/69ce72204a35f72da045

require 'pry'
require 'highline/import'
require_relative 'animal'
require_relative 'client'
require_relative 'shelter'
require_relative 'menu_options'

# Shelter setup + test animals
hpt_shelter = Shelter.new("Happi Tails")
a1 = Animal.new("Fluffy", 12, "female", "Rabbit", [])
a2 = Animal.new("Puma", 11, "female", "Kitten", [])
c1 = Client.new("Luke", 0, 28, 0)
hpt_shelter.add_animal(a1)
hpt_shelter.add_animal(a2)
hpt_shelter.add_client(c1)

say("Welcome to the HappiTails Interactive Menuing System...")
loop do
  choose do |menu|
    menu.header = "HappiTails v1.0"
    menu.prompt = "> "

    menu.choice(:animals) { animal_choices_menu(hpt_shelter) }
    menu.choice(:client) { client_choices_menu(hpt_shelter) }


    ### IMPLEMENT THIS
    menu.choice(:adopts) { adopt_choices_menu(hpt_shelter) }
    menu.choice(:quit) { exit }
  end
end


