class Client

  attr_accessor :name, :age, :children, :pets

  def initialize (name, age, children)
    @name = name
    @age = age
    @children = children
    @pets = []
  end
  
end