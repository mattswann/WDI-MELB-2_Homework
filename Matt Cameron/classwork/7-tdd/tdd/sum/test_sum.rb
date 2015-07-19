require 'minitest/autorun'
require 'minitest/pride'
require 'minitest/reporters'   #optional
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new   # optional
require_relative 'sum'


describe Dim do

	it 'work out sum of 3, under 10' do
		@dim = Dim.new(10, [3])
		@dim.sum.must_equal 18
	end

	it 'work out sum of 3 and 5, under 10' do
		@dim = Dim.new(10,[3,5])
		@dim.sum.must_equal 33
	end

	it 'work out sum of 2 exact numbers' do
		@dim = Dim.new([3,3])
		@dim.sum.must_equal 18
	end

	it 'work out sum of any number of numbers' do
		@dim = Dim.new(10, [3,5,6])
		@dim.sum.must_equal 33
	end

end


