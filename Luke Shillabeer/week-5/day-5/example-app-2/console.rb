require 'active_record'
require 'pry'

ActiveRecord::Base.logger = Logger.new(STDERR)

require_relative 'config'
requre_relative 'student'

binding.pry
