var accounts = {
    checking: {
        balance: 0,
        deposit: function (amount) {
            this.balance += amount;
        },
        withdraw: function (amount) {
            // Avoid JavaScript floating point calculation errors
            var temp = (this.balance - amount).toFixed(2);
            this.balance = parseFloat(temp);
        },
        getBalance: function () {
            return this.balance;
        }
    },

    savings: {
        balance: 0,
        deposit: function (amount) {
            this.balance += amount;

        },
        withdraw: function (amount) {
            // Avoid JavaScript floating point calculation errors
            var temp = (this.balance - amount).toFixed(2);
            this.balance = parseFloat(temp);
        },
        getBalance: function () {
            return this.balance;
        }
    }
};

var checking = accounts.checking;
var savings = accounts.savings;

document.getElementById("checkingDeposit").addEventListener('click', function(){
    var checkBal = document.getElementById("checkingBalance");
    var checkAmt = document.getElementById("checkingAmount");
    var savMsg = document.getElementById("savingsMsg");
    var checkMsg = document.getElementById("checkingMsg");

    savMsg.innerHTML = "";
    checkMsg.innerHTML = "";

    // Retrieve the checking acct deposit amount and convert to a floating point number
    var userAmount = parseFloat(checkAmt.value);

    if (amountValid(userAmount)) {
        // Convert negative amount to positive
        userAmount = Math.abs(userAmount);

        // Increase checking account balance
        checking.deposit(userAmount);

        // Update screen balance and input text field
        checkBal.innerHTML = ("$" + checking.getBalance().toFixed(2));
        checkAmt.value = "";

        // Ensure account background colour indicates positive amount
        removeClass(checkBal,"zero");
    } else {
        alert("Amount entered must be a number! Please re-enter the amount.");
    }
});

document.getElementById("savingsDeposit").addEventListener('click', function(){
    var savBal = document.getElementById("savingsBalance");
    var savAmt = document.getElementById("savingsAmount");
    var savMsg = document.getElementById("savingsMsg");
    var checkMsg = document.getElementById("checkingMsg");

    savMsg.innerHTML = "";
    checkMsg.innerHTML = "";

    // Retrieve the savings acct deposit amount and convert to a floating point number
    var userAmount = parseFloat(savAmt.value);

    if (amountValid(userAmount)) {
        // Convert negative amount to positive
        userAmount = Math.abs(userAmount);

        // Increase savings account balance
        savings.deposit(userAmount);

        // Update screen balance and input text field
        savBal.innerHTML = ("$" + savings.getBalance().toFixed(2))
        savAmt.value = "";

        // Ensure account background colour indicates positive amount
        removeClass(savBal,"zero");
    } else {
        alert("Amount entered must be a number! Please re-enter the amount.");
    }
});

document.getElementById("checkingWithdraw").addEventListener('click', function(){
    var checkBal = document.getElementById("checkingBalance");
    var savBal = document.getElementById("savingsBalance");
    var checkAmt = document.getElementById("checkingAmount");
    var savMsg = document.getElementById("savingsMsg");
    var checkMsg = document.getElementById("checkingMsg");

    savMsg.innerHTML = "";
    checkMsg.innerHTML = "";

    // Retrieve the checking acct withdrawal amount and convert to a floating point number
    var userAmount = parseFloat(checkAmt.value);

    if (amountValid(userAmount)) {
        // Convert negative amount to positive
        userAmount = Math.abs(userAmount);

        // If the checking account can't cover the withdrawal amount, attempt to make up the difference by also withdrawing from the savings account
        if (checking.getBalance() > userAmount) {
            checking.withdraw(userAmount);
        } else if ((checking.getBalance() + savings.getBalance()) >= userAmount) {
            userAmount -= checking.getBalance();
            checking.withdraw(checking.getBalance());
            savings.withdraw(userAmount);
        } else {
            checkMsg.innerHTML = "Insufficient combined funds available";
        }

        // Update screen balances and checking account input text field
        savBal.innerHTML = ("$" + savings.getBalance().toFixed(2))
        checkBal.innerHTML = ("$" + checking.getBalance().toFixed(2))
        checkAmt.value = "";

        // Set account background colours to indicate zero-balance (if required)
        if (checking.getBalance() === 0) {
            addClass(checkBal,"zero");
        }
        if (savings.getBalance() === 0) {
            addClass(savBal,"zero");
        }
    } else {
        alert("Amount entered must be a number! Please re-enter the amount.");
    }
});

document.getElementById("savingsWithdraw").addEventListener('click', function(){
    var checkBal = document.getElementById("checkingBalance");
    var savBal = document.getElementById("savingsBalance");
    var savAmt = document.getElementById("savingsAmount");
    var savMsg = document.getElementById("savingsMsg");
    var checkMsg = document.getElementById("checkingMsg");

    savMsg.innerHTML = "";
    checkMsg.innerHTML = "";

    // Retrieve the savings acct withdrawal amount and convert to a floating point number
    var userAmount = parseFloat(savAmt.value);

    if (amountValid(userAmount)) {
        // Convert negative amount to positive
        userAmount = Math.abs(userAmount);

        // If the savings account can't cover the withdrawal amount, attempt to make up the difference by also withdrawing from the checking account
        if (savings.getBalance() > userAmount) {
            savings.withdraw(userAmount);
        } else if ((savings.getBalance() + checking.getBalance()) >= userAmount) {
            userAmount -= savings.getBalance();
            savings.withdraw(savings.getBalance());
            checking.withdraw(userAmount);
        } else {
            savMsg.innerHTML = "Insufficient combined funds available";
        }

        // Update screen balances and savings account input text field
        checkBal.innerHTML = ("$" + checking.getBalance().toFixed(2))
        savBal.innerHTML = ("$" + savings.getBalance().toFixed(2))
        savAmt.value = "";

        // Set account background colours to indicate zero-balance (if required)
        if (savings.getBalance() === 0) {
            addClass(savBal,"zero");
        }
        if (checking.getBalance() === 0) {
            addClass(checkBal,"zero");
        }
    } else {
        alert("Amount entered must be a number! Please re-enter the amount.");
    }
});

function amountValid (amt) {
    if (isNaN(amt)) {
        return false;
    } else {
        return true;
    }
}

function addClass(element,clas){
// Adds a class to an element; 
    element.classList.add(clas);
}

function removeClass(element,clas){
// Removes a class from an element
    element.classList.remove(clas);
}