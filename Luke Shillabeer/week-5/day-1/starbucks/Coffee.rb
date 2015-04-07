class Coffee
  attr_accessor :type, :sugars, :size, :name

  def initialize(type, sugars, size, name)
    @type = type
    @sugars = sugars
    @size = size
    @name = name
  end

  def to_s
    "#{ @name }'s #{ @type }, #{ @size }, #{ @sugars } sugars."
  end

  def string_difference_percent(a, b)
    longer = [a.size, b.size].max
    same = a.each_char.zip(b.each_char).select { |a,b| a == b }.size
    (longer - same) / a.size.to_f
  end

end
