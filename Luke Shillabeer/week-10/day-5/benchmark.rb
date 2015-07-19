class SuperMario

  def cook
    pizza_count = 500_000
    pizza_count.times do |index|
      "bake pizza for the #{index} time"
    end
  end

end

def benchmark(callback)
  start_time = Time.now
  callback.call
  finish_time = Time.now
  puts "took: #{finish_time - start_time}"
end

benchmark(Proc.new { SuperMario.new.cook })
