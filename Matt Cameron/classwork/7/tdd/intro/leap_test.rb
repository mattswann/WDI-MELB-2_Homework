require 'minitest/autorun'
require 'minitest/reporters'   #optional
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new   # optional

require_relative 'leap'

# def test(message, actual, expected)
# 	if actual == expected
# 		puts "winning #{message}"
# 	else
# 		puts "losing #{message}"
# 	end
# end


# test 'leap year', leap_year?(1900), false
# test 'common year', leap_year?(2001), false
# test 'year 1', leap_year?(1), false
# test 'empty string', leap_year?(''), "you're an idiot"


class LeapYearTest < MiniTest::Test

	def test_leap_year
		assert_equal true, leap_year?(2000)
	end

	def test_common_year
		assert_equal false, leap_year?(2001)
	end

	def test_empty_string_as_input
		assert_equal 'idiot', leap_year?('')
	end
end