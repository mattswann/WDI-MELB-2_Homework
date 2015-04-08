require 'pry'

class School
	attr_reader :name
	attr_accessor :db

	def initialize(name)
		@name = name
		@db = {}
	end

	def add(name, grade)
		if db[grade]
			db[grade] << name
		else
			db[grade] = [name]
		end
	end

	def grade(grade)
		db[grade]
	end

	def sort
		sorted_db = db.each {|key, value| grade(key).sort!}
		Hash[sorted_db.sort]
	end

end

school = School.new("Haleakala Hippy School")
school.add "Staci", 3
school.add "James", 2
school.add "Holly", 5
school.add "Steve", 2
school.add "Anna", 2

binding.pry