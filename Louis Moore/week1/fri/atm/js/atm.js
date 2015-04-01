
// https://github.com/epoch/codyperry/blob/master/02-web/atm/atm.js
// DT's example
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
	} return value;
}

//-------------------------------------------------------//
//|		    		^^^^^^ JS logic ^^^^^^				|//
//|		   			↓↓↓↓↓↓↓↓  HTML  ↓↓↓↓↓↓				|//
//-------------------------------------------------------//

// add savings
var savingsDepositBtn = document.getElementById('savingsDeposit');
savingsDepositBtn.addEventListener('click', addSavings);
// add checking
var checkingDepositBtn = document.getElementById('checkingDeposit');
checkingDepositBtn.addEventListener('click', addChecking);
// remove savings
var savingsWithdraw = document.getElementById('savingsWithdraw');
savingsWithdraw.addEventListener('click', /*callback*/removeSavings);
// remove checking
var checkingWithdrawBtn = document.getElementById('checkingWithdraw');
checkingWithdrawBtn.addEventListener('click', removeChecking);