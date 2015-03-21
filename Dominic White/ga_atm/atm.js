function depositC() {
	var currentChecking = parseFloat(document.getElementById("balance1").innerHTML);
	var depositChecking = parseFloat(document.getElementById("checkingAmount").value, 10);
	var totalCheckingAmount = currentChecking + depositChecking;
	document.getElementById("balance1").innerHTML = parseFloat(totalCheckingAmount).toFixed(2);
}

function withdrawC() {
	var currentChecking = parseFloat(document.getElementById("balance1").innerHTML);
	var withdrawChecking = parseFloat(document.getElementById("checkingAmount").value, 10);
	if (currentChecking > 0.00) {
		var totalCheckingAmount = currentChecking - withdrawChecking;
		document.getElementById("balance1").innerHTML = parseFloat(totalCheckingAmount).toFixed(2);
	} else {
		var totalSavingsAmount = currentSavings - withdrawChecking;
		document.getElementById("balance2").innerHTML = parseFloat(totalSavingsAmount).toFixed(2);
	}

}

function depositS() {
	var currentSavings = parseFloat(document.getElementById("balance2").innerHTML);
	var depositSavings = parseFloat(document.getElementById("savingsAmount").value, 10);
	var totalSavingsAmount = currentSavings + depositSavings;
	document.getElementById("balance2").innerHTML = parseFloat(totalSavingsAmount).toFixed(2);
}

function withdrawS() {
	var currentSavings = parseFloat(document.getElementById("balance2").innerHTML);
	var withdrawSavings = parseFloat(document.getElementById("savingsAmount").value, 10);
	var totalSavingsAmount = currentSavings - withdrawSavings;
	document.getElementById("balance2").innerHTML = parseFloat(totalSavingsAmount).toFixed(2);
}

var currentChecking = parseFloat(document.getElementById("balance1").innerHTML);
var currentSavings = parseFloat(document.getElementById("balance2").innerHTML);

document.getElementById("checkingDeposit").onclick = depositC;
document.getElementById("checkingWithdraw").onclick = withdrawC;
document.getElementById("savingsDeposit").onclick = depositS;
document.getElementById("savingsWithdraw").onclick = withdrawS;
