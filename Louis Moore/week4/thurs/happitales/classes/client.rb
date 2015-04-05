class Client

  attr_accessor :name, :children, :age, :pets

  def initialize (name, children, age)
    @name = name
    @children = children
    @age = age
    @pets = []
  end
  
end