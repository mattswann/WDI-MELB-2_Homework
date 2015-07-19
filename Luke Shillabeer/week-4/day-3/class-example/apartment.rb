class Apartment
  attr_accessor :unit, :num_beds, :num_baths, :tenants

  def initialize(unit, num_beds, num_baths, tenants)
    @unit = unit
    @num_beds = num_beds
    @num_baths = num_baths
    @tenants = tenants || []
  end

  # guard against setting tenant to nil
  def tenants=(value)
    @tenants = value || []
  end

  def add_tenant(person)
    @tenants << person
  end
end

