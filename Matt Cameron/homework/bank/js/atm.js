function setBackgroundColour() {
  savingsBackground.className = (accounts.savings.balance > 0) ? "balance" : "balance-nil";
  checkingBackground.className = (accounts.checking.balance > 0) ? "balance" : "balance-nil";
}

//checking html elements
var checkingBalance = document.getElementById("balance1");
var checkingInput = document.getElementById("checkingAmount");
var checkingDeposit = document.getElementById("checkingDeposit");
var checkingWithdrawal = document.getElementById("checkingWithdraw");
var checkingBackground = document.getElementById("balance1");

// savings html elements
var savingsBalance = document.getElementById("balance2");
var savingsInput = document.getElementById("savingsAmount");
var savingsDeposit = document.getElementById("savingsDeposit");
var savingsWithdrawal = document.getElementById("savingsWithdraw");
var savingsBackground = document.getElementById("balance2");


var accounts = {
  checking: {
    balance: 100,
    deposit: function (amount) {
      if(amount > 0) { //check that input is a positive number, ignore otherwise
    	accounts.checking.balance += amount;
    	checkingBalance.innerHTML = "$" + accounts.checking.balance;
      setBackgroundColour();
      }
      checkingInput.value = "";
    },
    withdraw: function (amount) {
      if(amount > 0) { //check that input is a positive number, ignore otherwise
        if (amount <= accounts.checking.balance) { //cannot withdraw more than account balance
        	accounts.checking.balance -= amount;
        	checkingBalance.innerHTML = "$" + accounts.checking.balance;
        } else if (amount >= accounts.checking.balance && amount <= (accounts.savings.balance + accounts.checking.balance)) {
            //update savings account
            accounts.savings.balance -= amount - accounts.checking.balance;
            //update checking account
            accounts.checking.balance = 0;
            //update html
            savingsBalance.innerHTML = "$" + accounts.savings.balance;
            checkingBalance.innerHTML = "$" + accounts.checking.balance;
        } else {
          alert("Insufficient funds");
        }
      }
      setBackgroundColour();
      checkingInput.value = "";
    }
  },

  savings: {
    balance: 1000,
    deposit: function (amount) {
      if(amount > 0) {
      accounts.savings.balance += amount;
      savingsBalance.innerHTML = "$" + accounts.savings.balance;
      }
      setBackgroundColour();
      savingsInput.value = "";
    },
    withdraw: function (amount) {
      if(amount > 0) { //check that input is a positive number, ignore otherwise
        if (amount <= accounts.savings.balance) { //cannot withdraw more than account balance
          accounts.savings.balance -= amount;
          savingsBalance.innerHTML = "$" + accounts.savings.balance;
        } // withdraw from other account if possible
          else if (amount >= accounts.savings.balance && amount <= (accounts.savings.balance + accounts.checking.balance)) {
            //update checking account
            accounts.checking.balance -= amount - accounts.savings.balance;
            //update savings account
            accounts.savings.balance = 0;
            //update html
            savingsBalance.innerHTML = "$" + accounts.savings.balance;
            checkingBalance.innerHTML = "$" + accounts.checking.balance;
        } else {
          alert("Insufficient funds");
        }
      }
      setBackgroundColour();
      savingsInput.value = "";
    }
  }
};



// on load checking account stuff
checkingBalance.innerHTML = "$" + accounts.checking.balance;
checkingDeposit.addEventListener('click', function() {accounts.checking.deposit(parseInt(checkingAmount.value,10)) });
checkingWithdrawal.addEventListener('click', function() {accounts.checking.withdraw(parseInt(checkingAmount.value,10)) });

// on load savings account stuff
savingsBalance.innerHTML = "$" + accounts.savings.balance;
savingsDeposit.addEventListener('click', function() {accounts.savings.deposit(parseInt(savingsAmount.value,10)) });
savingsWithdrawal.addEventListener('click', function() { accounts.savings.withdraw(parseInt(savingsAmount.value,10)) });

// other on load stuff
setBackgroundColour();
