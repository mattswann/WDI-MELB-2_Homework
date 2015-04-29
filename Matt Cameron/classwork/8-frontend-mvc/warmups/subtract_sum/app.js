function add_subtract(arr) {
	var odd = [];
	var even = [];

	for(var i=0; i < arr.length; i++) {
		if (i %2 == 0) {
			even.push(arr[i]);
		} else {
			odd.push(arr[i]);
		}
	}
		var odd_sum = odd.reduce(function(a, b) {
			return a + b;
		});
		var even_sum = even.reduce(function(a, b) {
			return a + b;
		});

		var total = even_sum - odd_sum;
		console.log(total)
}

add_subtract([5.0, 4.0, 3.0, 2.0, 1.0])

add_subtract([100.7, -1.3, 10.0, 0.1])

