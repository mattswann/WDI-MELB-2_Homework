function setBackgroundColour() {
  if (accounts.savings.balance <= 0) {
    $savingsBackground.toggleClass('balance-nil');
  }
  if (accounts.checking.balance <= 0) {
    $checkingBackground.toggleClass('balance-nil');
  }
}

//checking html elements
var $checkingBalance = $("#balance1");
var $checkingInput = $("#checkingAmount");
var $checkingDeposit = $("#checkingDeposit");
var $checkingWithdrawal = $("#checkingWithdraw");
var $checkingBackground = $("#balance1");

// savings html elements
var $savingsBalance = $("#balance2");
var $savingsInput = $("#savingsAmount");
var $savingsDeposit = $("#savingsDeposit");
var $savingsWithdrawal = $("#savingsWithdraw");
var $savingsBackground = $("#balance2");


var accounts = {
  checking: {
    balance: 100,
    deposit: function (amount) {
      if(amount > 0) { //check that input is a positive number, ignore otherwise
    	accounts.checking.balance += amount;
    	$checkingBalance.html("$" + accounts.checking.balance);
      setBackgroundColour();
      }
      $checkingInput.val("");
    },
    withdraw: function (amount) {
      if(amount > 0) { //check that input is a positive number, ignore otherwise
        if (amount <= accounts.checking.balance) { //cannot withdraw more than account balance
        	accounts.checking.balance -= amount;
        	$checkingBalance.html("$" + accounts.checking.balance);
        } else if (amount >= accounts.checking.balance && amount <= (accounts.savings.balance + accounts.checking.balance)) {
            //update savings account
            accounts.savings.balance -= amount - accounts.checking.balance;
            //update checking account
            accounts.checking.balance = 0;
            //update html
            $savingsBalance.html("$" + accounts.savings.balance);
            $checkingBalance.html("$" + accounts.checking.balance);
        } else {
          alert("Insufficient funds");
        }
      }
      setBackgroundColour();
      $checkingInput.val("");
    }
  },

  savings: {
    balance: 1000,
    deposit: function (amount) {
      if(amount > 0) {
      accounts.savings.balance += amount;
      $savingsBalance.html("$" + accounts.savings.balance);
      }
      setBackgroundColour();
      $savingsInput.val("");
    },
    withdraw: function (amount) {
      if(amount > 0) { //check that input is a positive number, ignore otherwise
        if (amount <= accounts.savings.balance) { //cannot withdraw more than account balance
          accounts.savings.balance -= amount;
          $savingsBalance.html("$" + accounts.savings.balance);
        } // withdraw from other account if possible
          else if (amount >= accounts.savings.balance && amount <= (accounts.savings.balance + accounts.checking.balance)) {
            //update checking account
            accounts.checking.balance -= amount - accounts.savings.balance;
            //update savings account
            accounts.savings.balance = 0;
            //update html
            $savingsBalance.html("$" + accounts.savings.balance);
            $checkingBalance.html("$" + accounts.checking.balance);
        } else {
          alert("Insufficient funds");
        }
      }
      setBackgroundColour();
      $savingsInput.val("");
    }
  }
};



// on load checking account stuff
$checkingBalance.html("$" + accounts.checking.balance);
$checkingDeposit.on('click', function() {
  accounts.checking.deposit(parseInt($checkingInput.val(), 10))
});

$checkingWithdrawal.on('click', function() {
  accounts.checking.withdraw(parseInt($checkingInput.val(), 10))
});

// on load savings account stuff
$savingsBalance.html("$" + accounts.savings.balance);
$savingsDeposit.on('click', function() {accounts.savings.deposit(parseInt($savingsInput.val(), 10)) });
$savingsWithdrawal.on('click', function() { accounts.savings.withdraw(parseInt($savingsInput.val(), 10)) });

// other on load stuff
setBackgroundColour();
