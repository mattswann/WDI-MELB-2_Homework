class Dim

	def initialize(maxnum = 10, arr)
		@max = maxnum
		@arr = arr.uniq
	end

	def sum
		tally = 0
		checked_nums = []
		(0..@max).to_a.each do |num|
			@arr.each do |multiple|
				if num % multiple == 0 && !checked_nums.include?(num)
					tally += num
					checked_nums << num
				end
			end
		end
	tally
	end

end