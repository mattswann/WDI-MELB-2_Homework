def add_lunch_item!(orders, name, item)
  orders[name] ||= []
  orders[name] = orders[name] += [item]
  return orders
end

orders = {}

while true
  print "Enter Name: "
  order_name = gets.chomp

  print "#{ order_name }, what would you like to order: "
  order_item = gets.chomp

  print "Continue orderz? y/n: "
  order_continue = gets.chomp

  add_lunch_item!(orders, order_name, order_item)

  break if order_continue == "n"
end

orders.each  do |key, val|
  print "#{ key } wants to eat #{ val.join(" ") }.\n"
end
