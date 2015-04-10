require_relative 'config'
require_relative 'student'

Student.delete_all # every time I run seed, delete all existing records
Student.create name: 'dom', favourite_number: 6
Student.create name: 'jc', favourite_number: 7
Student.create name: 'beta', favourite_number: 42