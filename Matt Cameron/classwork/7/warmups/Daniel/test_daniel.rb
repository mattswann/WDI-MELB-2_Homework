require 'minitest/autorun'
require 'minitest/pride'
require 'minitest/reporters'   #optional
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new   # optional
require_relative 'daniel'

describe Convo do

	let :convo do
		Convo.new
	end

	it 'responds to statement' do
		convo.talk("hello").must_equal "Whatever"
	end

	it 'responds to questions' do
		convo.talk("wasssuuup?").must_equal "Sure"
	end

	it 'responds to yelling' do
		convo.talk("CLEAN YOUR ROOM!").must_equal "Woah, chill out!"
	end

end


# class DanielTest < Minitest::Test

# 	def setup
# 		@convo = Convo.new
# 	end

# 	def test_statement
# 		assert_equal 'Whatever', @convo.talk('hi')
# 	end

# 	def test_question
# 		assert_equal 'Sure', @convo.talk('Wasssuuup?')
# 	end

# 	def test_yelling
# 		assert_equal 'Woah, chill out!', @convo.talk('CLEAN YOUR ROOM')
# 	end

# end