require 'pry'

class Robot
	attr_reader :mac_address, :name, :instruction_count, :timers

	def initialize
		@name = "#{(0...2).map { (65 + rand(26)).chr }.join}#{(0...3).map {rand(9)}.join}"

				# DT's method
			  # "#{('AA'..'ZZ').to_a.sample}#{('000'..'999').to_a.sample}"

		@mac_address ||= "Robot#{(0...18).map {rand(9)}.join}#{(65 + rand(26)).chr}"
		@instruction_count ||= 0
		@created_time ||= Time.now
		@time_since_boot = Time.now
	end

	def reset
		@instruction_count += 1
		initialize
	end

	def name
		@instruction_count += 1
		@name
	end

	def timers
		@instruction_count += 1
		[time_since_boot, created_time].join(', ')
	end

	def created_time
		"#{(Time.now - @created_time).floor} seconds since creation"
	end

	def time_since_boot
		"#{(Time.now - @time_since_boot).floor} seconds since last boot"
	end

end

robot1 = Robot.new
robot2 = Robot.new

binding.pry