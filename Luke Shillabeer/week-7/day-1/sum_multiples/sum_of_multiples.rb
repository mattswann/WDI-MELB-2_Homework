# http://math.stackexchange.com/a/9305/81174
# perhaps an avenue of optimisation for this problem?
class SumOfMultiples

  def initialize(list_nums, max)
    @list_nums = list_nums.sort.reverse
    @max = max
  end

  def sum
    consumable_iter = (1..@max).to_a
    @list_nums.each do |num|
      consumable_iter.select! { |i| i % num != 0 }
    end
    ((1..@max).to_a - consumable_iter).inject { |x,y| x + y }
  end

end

p SumOfMultiples.new([3,4,5], 10).sum
