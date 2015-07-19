require 'minitest/autorun'
require 'minitest/reporters'

require_relative 'leap'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

describe LeapYear do
  
  # setup for this block of test cases
  before do
    @leap = LeapYear.new
  end

  it "returns true when a leap-year is passed" do
    LeapYear.leap_year?(2000).must_equal true
  end

  it "returns false when a non-leap-year is passed" do
    LeapYear.leap_year?(1).must_equal false
  end
  
end
