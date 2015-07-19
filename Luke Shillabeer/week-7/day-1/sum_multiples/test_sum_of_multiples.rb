require 'minitest/autorun'
require 'minitest/pride'
require 'minitest/reporters'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

require_relative 'sum_of_multiples'

describe SumOfMultiples do

  it 'work out sum of %[3]== 0 upto 10' do
    SumOfMultiples.new([3],10).sum.must_equal 18
  end

  it 'work out sum of %[3,5] == 0 upto 10' do
    SumOfMultiples.new([3,5],10).sum.must_equal 33
  end

  it 'work out sum of %[3] == 0 upto 30' do
    SumOfMultiples.new([3],30).sum.must_equal 165
  end

  it 'work out sum of %[3,4,5] == 0 upto 10' do
    SumOfMultiples.new([2,3,4,5], 10).sum.must_equal 45
  end
end
