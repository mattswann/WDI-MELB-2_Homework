require_relative "school"

school = School.new("Haleakala Hippy School")
school.add("James", 2)
school.add("Phil", 2)
school.add("Jennifer", 3)
school.add("Little Billy", 1)
puts school.sort
