
var accounts = {
  checking: {
    balance: 0,

 deposit: function (amount) {
	this.balance = this.balance + amount;
	console.log('Im checking deposit');
},

   withdraw: function (amount) {
	if(amount <= this.balance) {
   	this.balance = this.balance - amount;
	console.log('Im checking withdrawal');
}	else {
	return false;
		}
	}
	}
};
//----------------------------------------------------------------
function renderBalance() {
var checkingBalanceDisplay = document.getElementById('balance1');
checkingBalanceDisplay.innerHTML = '$' + accounts.checking.balance;
}

var checkingDepositBtn = document.getElementById('checkingDeposit');
checkingDepositBtn.addEventListener('click', function()	{
	var depositInput = document.getElementById('checkingAmount');
	var depositAmount = parseInt(depositInput.value, 10);
	console.log('depositAmount')

	accounts.checking.deposit(depositAmount);
	renderBalance();
})

var checkingWithdrawBtn = document.getElementById('checkingWithdraw');
checkingDepositBtn.addEventListener('click', function(){
	var depositInput = document.getElementById('checkingAmount');
	var withdrawAmount = parseInt(depositInput.value, 10);

	accounts.checking.withdraw(withdrawAmount);
	renderBalance();
})

var savingsDepositBtn = document.getElementById('savingsDeposit');
savingsDepositBtn.addEventListener('click', function(){
	var depositInput = document.getElementById('savingsAmount');
	var depositAmount = parseInt(savingsInput.value, 10);
})

var savingsWithdrawBtn = document.getElementById('savingsWithdraw');
savingsWithdrawBtn.addEventListener('click', function(){
	var depositInput = document.getElementById('WithdrawAmount');
	var withdrawAmount = parseInt(depositInput.value, 10);
})

 renderBalance();



