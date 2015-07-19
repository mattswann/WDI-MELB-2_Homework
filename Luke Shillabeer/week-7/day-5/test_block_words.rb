require 'minitest/autorun'
require 'minitest/pride'
require 'minitest/reporters'

Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new

require_relative 'block_words'

describe BlockWords do

  blocks = [['B','O'],
    ['X','K'],
    ['D','Q'],
    ['C','P'],
    ['N','A'],
    ['G','T'],
    ['R','E'],
    ['T','G'],
    ['Q','D'],
    ['F','S'],
    ['J','W'],
    ['H','U'],
    ['V','I'],
    ['A','N'],
    ['E','R'],
    ['F','S'],
    ['L','Y'],
    ['P','C'],
    ['Z','M'],]

  it 'works out whether the word "A" can be produced using given blocks' do
    BlockWords.new(blocks).can_make_word?('A').must_equal true
  end

  it 'works out whether the word "BARK" can be produced using given blocks' do
    BlockWords.new(blocks).can_make_word?('BARK').must_equal true
  end

  it 'works out whether the word "BOOK" can be produced using given blocks' do
    BlockWords.new(blocks).can_make_word?('BOOK').must_equal false
  end

  it 'works out whether the word "TREAT" can be produced using given blocks' do
    BlockWords.new(blocks).can_make_word?('TREAT').must_equal true
  end

  it 'works out whether the word "COMMON" can be produced using given blocks' do
    BlockWords.new(blocks).can_make_word?('COMMON').must_equal false
  end

  it 'works out whether the word "SQUAD" can be produced using given blocks' do
    BlockWords.new(blocks).can_make_word?('SQUAD').must_equal true
  end

  it 'works out whether the word "CONFUSE" can be produced using given blocks' do
    BlockWords.new(blocks).can_make_word?('CONFUSE').must_equal true
  end

end
