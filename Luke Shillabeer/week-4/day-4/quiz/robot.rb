require 'date'

class Robot
  @@names = []

  def initialize()
    @name         = generate_name(5)
    @mac_address  = generate_mac_address
    @date_created = DateTime.now
    @date_reset   = DateTime.now
    @instruction_count = 0
  end

  def generate_name(len)
    name = (0..len).map { ('a'..'z').to_a.sample }.join.upcase
    while @@names.include? name
      name = (0..len).map { ('a'..'z').to_a.sample }.join.upcase
    end
    @@names.push(name)
    return name
  end

  def generate_mac_address
    return (1..6).map{"%0.2X"%rand(256)}.join(":")
  end

  def reset
    @instruction_count += 1
    @@names.delete(@name)
    @name = generate_name(5)
    @date_reset = DateTime.now
  end

  def name
    @instruction_count += 1
    @name
  end

  def mac_address
    @instruction_count += 1
    @mac_address
  end

  def timers
    @instruction_count += 1
    elapsed_since_boot    = ((DateTime.now - @date_reset) * 24 * 60 * 60).to_i
    elapsed_since_created = ((DateTime.now - @date_created) * 24 * 60 * 60).to_i
    "#{elapsed_since_boot} seconds since last boot, #{elapsed_since_created} seconds since creation."
  end

  private :generate_name, :generate_mac_address
end
