checkingAccount: {

	var balance = 2000;

	

	function deposit(amount) {
		this.balance = this.balance + amount;


		// balance2 = (balance + savingsDeposit) - savingsWithdraw;
	};


	function withdrawel(amount) {
		this.balance = this.balance - amount;
	}
};

var checkingDeposit = document.getElementById("checkingDeposit")
						checkingDeposit.addEventListener("click", function() {
							checkingAccount.deposit(document.getElementById("checkingAmount"))
						}
							)














var savingsAmount = 500;
var savingsDeposit = 200;
var savingsWithdraw = 10.00;
//var balance = (balance2 + savingsDeposit) - savingsWithdraw;
console.log(balance);
//document.getElementById('savingsAmount').addEventListener('click', function deposit();


// if (balance2 ===> 0) {
// 	console.log("Well done keep saving")
// }	else	{
// 	("You cannot run your savings account into debt!")
// }

//var balance = checkingBalance + savingsBalance;
console.log(balance);

var deposit = (0)
var withdraw = (0)

