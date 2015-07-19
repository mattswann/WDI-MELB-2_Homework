require 'active_record'
require 'pry'


#show sql in the terminal
ActiveRecord::Base.logger = Logger.new(STDERR)

require_relative 'config'
require_relative 'movie'

binding.pry