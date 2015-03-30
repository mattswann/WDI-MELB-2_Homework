number = 0

while number < 10
	puts "this is bottle #{number}"
	number += 1
end


=begin

This is a multi-line
comment in Ruby

=end

number = 0

until number > 10
	puts "this is bottle #{number}"
	number += 1
end


dumplings_devoured = 0
begin
	puts "eat dumpling"
	dumplings_devoured += 1
end while dumplings_devoured < 50


3.times do
	puts "beetlejuice"
end

1.upto(3) do
	puts "beetlejuice"
end

3.downto(0) do |x|
	puts x
end