require 'minitest/autorun'
require 'minitest/reporters'   #optional
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new   # optional

require_relative 'leap'



describe LeapYear do

	# possible to set up variables/instances for each test case
	before do
		@leap = LeapYear.new
	end



	it 'returns true when it is a leap year' do

		LeapYear.leap_year?(2000).must_equal true
	end

	it 'returns false when not a leap year' do
		LeapYear.leap_year?(2001).must_equal false
	end
end
