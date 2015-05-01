// constructor function

function Foobar(title) {
	this.title = title;
	var hello = function() {
		console.log('hello world');
	};

	this.helloWorld = hello
	// now we can call Foobar.helloWorld and it will run the hello function
}


// or use Prototype


// add a function to the Foobar object, which can be called using Foobar.fn
Foobar.prototype.greetings = function() {
	console.log("Greetings friend")
}

		// to use this, create a new 'instance', then call the new function directly
		// var fb = new Foobar();
		// fb.greetings();



function Account(balance) {
	this.balance = balance;
}

Account.prototype.deposit = function(amount) {
	this.balance = this.balance + amount
}