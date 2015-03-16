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
	balance2.innerHTML = checkBelowZero(balance);
}
}

function addChecking() {
var checkingAmount = document.getElementById('checkingAmount').value;
console.log('checkingAmount', checkingAmount);

if (parseInt(checkingAmount) > 0) {
	checking += parseInt(checkingAmount);
	balance1.innerHTML = checkBelowZero(checking);
}
}

function removeSavings() {
var savingsAmount = document.getElementById('savingsAmount').value;
console.log('savingsAmount', savingsAmount);

if (parseInt(savingsAmount) > 0) {
	balance -= parseInt(savingsAmount);
	balance2.innerHTML = checkBelowZero(balance);
}
}

function removeChecking() {
var checkingAmount = document.getElementById('checkingAmount').value;
console.log('checkingAmount', checkingAmount);

if (parseInt(checkingAmount) > 0) {
	checking -= parseInt(checkingAmount);
	balance1.innerHTML = checkBelowZero(checking);
}
}


function checkBelowZero(value) {
	if (value < 0) {
		value = 0
	} return value;
}

// add savings
var savingsDeposit = document.getElementById('savingsDeposit');
savingsDeposit.addEventListener('click', addSavings);
// add checking
var checkingDeposit = document.getElementById('checkingDeposit');
checkingDeposit.addEventListener('click', addChecking);
// remove savings
var savingsWithdraw = document.getElementById('savingsWithdraw');
savingsWithdraw.addEventListener('click', /*callback*/removeSavings);
// remove checking
var checkingWithdraw = document.getElementById('checkingWithdraw');
checkingWithdraw.addEventListener('click', removeChecking);