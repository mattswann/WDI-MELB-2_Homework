class Person
  attr_accessor :firstname, :lastname, :gender, :dob

  def initialize(firstname, lastname, gender, dob)
    @firstname = firstname
    @lastname  = lastname
    @gender    = gender
    @dob       = dob
  end
end
