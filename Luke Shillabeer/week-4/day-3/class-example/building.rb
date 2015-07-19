class Building
  attr_accessor :address, :name, :style, :apartments, :concierge

  def initialize(address, name, style, apartments, concierge)
    @address = address
    @name = name
    @style = style
    @apartments = apartments
    @concierge = concierge
  end
end
