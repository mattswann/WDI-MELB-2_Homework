# Input: [5.0, 4.0, 3.0, 2.0, 1.0]
# Output: 3.0
# (3.0 = 5.0 - 4.0 + 3.0 - 2.0 + 1.0)

# Input: [100.7, -1.3, 10.0, 0.1]
# Output: 111.9
# (111.9 = 100.7 - (-1.3) + 10.0 - 0.1)


def add_subtract(arr)
	odd = []
	even = []
	arr.each_index do |i|
		i.even? ? even << arr[i] :	odd << arr[i]
	end

	even_sum = even.inject{|sum,x| sum + x }
	odd_sum = odd.inject{|sum,x| sum + x }

	puts even_sum - odd_sum
end

add_subtract([5.0, 4.0, 3.0, 2.0, 1.0])

add_subtract([100.7, -1.3, 10.0, 0.1])