class Dice

	def self.roll(rolls = 1)
		stored_results = []
		rolls.times {
			stored_results << rand(6) + 1
		}
	  if stored_results.size == 1
			return stored_results.first
		else
			stored_results
		end
	end

end
