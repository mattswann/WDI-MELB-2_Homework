require 'minitest/autorun'
require 'minitest/pride'
require_relative 'hipster'


describe Hipster, "minitest syntax reference" do

	#runs code before each test
	before do
		@hipster = Hipster.new
	end

	#or

	# can now refer to 'hipster' which will call a new instance of Hipster
	let :hipster do
		Hipster.new
	end

	it '#define' do
		hipster.define.must_equal "you don't understand"
	end

	it '#walk' do
	end

	it '#labels' do
		hipster.labels.must_be_empty
		# @hipster.labels == []
	end

	describe "when asked about the font" do
		it "should be helvetica" do
			hipster.preferred_font.must_equal "helvetica"
		end
	end

	describe "when asked about mainstream" do
		it "won't be mainstream" do
			hipster.mainstream?.wont_equal true
		end
	end

end