// A possible approach:
var accounts = {
  checking: {
    balance: 0,
 
 deposit: function (amount) {
	this.balance = this.balance + amount;
	console.log('Im checking deposit');
},

   withdraw: function (amount) {
	this.balance = this.balance + amount;
	console.log('Im checking withdrawal');
}
},

  savings: {
    balance: 0,

 deposit: function (amount){
	this.balance = this.balance + amount;
	console.log('Im savings deposit');
 },
 withdraw: function (amount) {
	this.balance = this.balance + amount;
	console.log('Im savings withdraw');
}
}
};

var checkingDeposit = document.getElementById("checkingDeposit");
						checkingDeposit.addEventListener("click", deposit());



var checkingAccount = 0;
var balance = 2000;
var checkingAmount = 1000;
var checkingDeposit = 100;
var checkingWithdraw = 10;
console.log(balance);

var savingsAmount = 500;
var savingsDeposit = 200;
var savingsWithdraw = 10;
console.log(balance);


