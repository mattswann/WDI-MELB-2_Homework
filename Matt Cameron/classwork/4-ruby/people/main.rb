require 'pry'
require_relative 'person'

File.open('database.txt', 'a+') do |file|

	print "Add a person? (y/n) "
	responds = gets.chomp.downcase

	until responds == 'n'
		print "Name: "
		name = gets.chomp

		print "Age: "
		age = gets.chomp.to_i

		print "Gender: "
		gender = gets.chomp

		file.puts "#{name}, #{age}, #{gender}"
		print "Add a person? (y/n) "
		responds = gets.chomp.downcase

	end

end

people = []

File.open('database.txt', 'r') do |file|

	file.each do |line|
		data = line.split(', ')
		person = Person.new(data[0], data[1], data[2])
		people << person
	end

end

people.each do |person|
	puts person
end


