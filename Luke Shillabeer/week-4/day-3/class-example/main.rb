# spec'ed from: https://gist.github.com/epoch/78da82f3634470e859cf
require "pry"
require "./person"
require "./apartment"
require "./building"

p1 = Person.new("Luke", "Shillabeer", "Genderqueer", "03/02/1987")
p2 = Person.new("Ricky", "Lebenholc", "Genderqueer", "03/02/1990")
p3 = Person.new("Cathy", "Vilhelm", "Genderqueer", "10/05/1990")
t1 = [p1, p2, p3]

a1 = Apartment.new("1", "2", "6", t1)
b1 = Building.new("6 Balmoral Drive, Parkdale, Vicoria", "HousePlace", "Victorian", a1, "Bob")



binding.pry

