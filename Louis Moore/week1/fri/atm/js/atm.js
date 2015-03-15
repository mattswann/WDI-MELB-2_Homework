// var accounts = {
//   checking: {
//     balance: 0,
//     deposit: function (amount) {},
//     withdraw: function (amount) {}
//   },

//   savings: {
//     balance: 50,
//     deposit: addSavings(),
//     withdraw: removeSavings ()
//   }
// };
///////////////////////////////

//hardcode
var balance = 300;
var checking = 300;


function addSavings() {
var savingsAmount = document.getElementById('savingsAmount').value;
console.log('savingsAmount', savingsAmount);

if (parseInt(savingsAmount) > 0) {
	balance += parseInt(savingsAmount);
	balance2.innerHTML = balance;
	return savingsAmount;
}
}

function removeSavings () {
var savingsAmount = document.getElementById('savingsAmount').value;
console.log('savingsAmount', savingsAmount);

if (parseInt(savingsAmount) > 0) {
	balance -= parseInt(savingsAmount);
	balance2.innerHTML = balance;
	return savingsAmount;
}
}


var savingsDeposit = document.getElementById('savingsDeposit');
savingsDeposit.addEventListener('click', addSavings);

var savingsWithdraw = document.getElementById('savingsWithdraw');
savingsWithdraw.addEventListener('click', removeSavings);