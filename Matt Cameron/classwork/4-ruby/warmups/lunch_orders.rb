@lunch_orders = {}

puts "Lunch time is coming up. Time to get your order in!"

def order_lunch
	print "What is your name: "
	name = gets.chomp

	print "#{name} wants to order: "
	order = gets.chomp

	@lunch_orders[name] ||= []
	@lunch_orders[name].push(order)

	puts "Add another item to the order? (y/n)"
	another = gets.chomp.downcase

	order_lunch if another == 'y'
end

order_lunch

@lunch_orders.each do |key, value|
	puts "#{key} ordered #{value[0]}" if value.length == 1
	puts "#{key} ordered #{value[0]} & #{value[1]}" if value.length == 2
	puts "#{key} ordered #{value[0...-1].join(', ')} & #{value[-1]}" if value.length > 2
end