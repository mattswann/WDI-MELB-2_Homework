// this keyword

var fullname = "Matt Cameron"

function person() {
	console.log(this.fullname);
}

var cody = {
	fullname: 'Matt',
	greet: person,
	foo: function() {
		console.log("My fullname is " + this.fullname)
	}
};


// THE FOUR RULES OF 'THIS'    (in order of priority)

// 1. new keyword

// 2. explicit -> use fn.call(obj) to set the context object

// 3. implicit -> sets the object e.g. cody.foo

// 4. default -> global object (the highest one)


