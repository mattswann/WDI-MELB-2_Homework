require 'minitest/autorun'
require 'minitest/pride'
require 'minitest/reporters'   #optional
Minitest::Reporters.use! Minitest::Reporters::SpecReporter.new   # optional
require_relative 'letter_blocks'

describe Block do

	let :block do
		Block.new
	end

	it 'works for single letters' do
		block.can_make_word("A").must_equal true
	end

	it 'works for BARK' do
		block.can_make_word("BARK").must_equal true
	end

	it 'works for BOOK' do
		block.can_make_word("BOOK").must_equal false
	end

	it 'works for TREAT' do
		block.can_make_word("TREAT").must_equal true
	end

	it 'works for COMMON' do
		block.can_make_word("COMMON").must_equal false
	end

	it 'works for SQUAD' do
		block.can_make_word("SQUAD").must_equal true
	end

	it 'works for CONFUSE' do
		block.can_make_word("CONFUSE").must_equal true
	end


end