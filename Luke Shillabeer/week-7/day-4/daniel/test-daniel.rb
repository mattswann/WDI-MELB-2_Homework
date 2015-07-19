require 'minitest/autorun'
require 'minitest/pride'
require 'minitest/reporters'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

require_relative 'daniel'

describe Daniel do

  it 'ask daniel a question' do
    Daniel.new.talk("What's up Daniel?").must_equal 'Sure.'
  end

  it 'tell daniel something' do
    Daniel.new.talk("Daniel you are good").must_equal "Whatever."
  end

  it 'yell at daniel' do
    Daniel.new.talk("DANIEL WHATS UP").must_equal "Fine. Be that way!"
  end

end
