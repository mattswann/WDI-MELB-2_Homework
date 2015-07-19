require 'rails_helper'

RSpec.describe Fruit, :type => :model do

	describe "An apple" do

		it 'should not be squishy' do
			@apple = Fruit.new
			expect(@apple.squishy?).to equal(false)
		end
	end


end