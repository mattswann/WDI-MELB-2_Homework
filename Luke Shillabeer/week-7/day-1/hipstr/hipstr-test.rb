require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use! 
Minitest::Reporters::SpecReporter.new

require_relative 'hipstr'

describe Hipster, "minitest syntax reference" do

  let(:hipster) do
    Hipster.new
  end

  it '#define' do
    hipster.define.must_equal "you don't understand"
  end

  it '#walk?' do
    skip
  end

  it '#labels' do
    hipster.labels.must_be_empty
  end

  describe "when asked about the font" do
    it "should be helvetica" do
      hipster.preferred_font.must_equal 'helvetica'
    end
  end

  describe "when asked about maintstream" do
    it "won't be mainstream" do
      hipster.mainstream?.wont_equal true
    end
  end

end
