/*
 Keep track of the chequing and savings balances somewhere
 Add functionality so that a user can deposit money into one of the bank accounts.
 Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
 Add functionality so that a user can withdraw money from one of the bank accounts.
 Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
 Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
 When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account (hint: add/remove classes with corresponding colours set in the CSS).
 What happens when the user wants to withdraw more money from the chequing account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the chequing balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
 Make sure there is overdraft protection going both ways.
 Are there ways to refactor your code to make it DRYer
 */

// Bank of GA
var accounts = {
    chequing: {
        balance: 0,
        deposit: function (amount) {},
        withdraw: function (amount) {}
    },

    savings: {
        balance: 0,
        deposit: function (amount) {},
        withdraw: function (amount) {}
    }
};

// Get ID's of all elements we want to interact with on the page
var chequingDeposit = document.getElementById('chequingDeposit');
var chequingWithdraw = document.getElementById('chequingWithdraw');
var chequingAmount = document.getElementById('chequingAmount');
var chequingBalance = document.getElementById('balance1');

var savingsDeposit = document.getElementById('savingsDeposit');
var savingsWithdraw = document.getElementById('savingsWithdraw');
var savingsAmount = document.getElementById('savingsAmount');
var savingsBalance = document.getElementById('balance2');

// add all required event listeners
chequingDeposit.addEventListener('click', chequingDepositF);
chequingWithdraw.addEventListener('click', chequingWithdrawF);
chequingBalance.addEventListener('onchange', redBackgroundChequingF); // change background color to red if 0
savingsDeposit.addEventListener('click', savingsDepositF);
savingsWithdraw.addEventListener('click', savingsWithdrawF);
savingsBalance.addEventListener('onchange', redBackgroundSavingsF); // change background color to red if 0

//todo here.
//changed the HTML from div to form. Still did not work. Tried onchange and change.
//balance1.addEventListener('onchange', redBackgroundChequingF);
//balance2.addEventListener('onchange', redBackgroundSavingsF);

// set initial balances and values
accounts.chequing.balance = 0;
accounts.savings.balance = 0;

function chequingDepositF(){
    // todo have declared these twice??
    var chequingAmount = document.getElementById('chequingAmount').value;
    var chequingAmountI = parseInt(chequingAmount);

    if (parseInt(chequingAmountI) > 0){
        accounts.chequing.balance += chequingAmountI;
        balance1.innerHTML = '$' + accounts.chequing.balance;
        redBackgroundChequingF();
    }
}

function chequingWithdrawF(){
    var chequingAmount = document.getElementById('chequingAmount').value;
    var chequingAmountI = parseInt(chequingAmount);

    if (parseInt(chequingAmountI) > 0 && enoughFundsInChequingF(chequingAmountI)){
        accounts.chequing.balance -= chequingAmountI;
        balance1.innerHTML = '$' + accounts.chequing.balance;
        redBackgroundChequingF();
    } else if (enoughFundsInSavingsF(chequingAmountI)) {
        accounts.savings.balance -= chequingAmountI;
        balance2.innerHTML = '$' + accounts.savings.balance;
        redBackgroundChequingF();
    }
}

function savingsDepositF(){
    var savingsAmount = document.getElementById('savingsAmount').value;
    var savingsAmountI = parseInt(savingsAmount);

    if (parseInt(savingsAmountI) > 0){
        accounts.savings.balance += savingsAmountI;
        balance2.innerHTML = '$' + accounts.savings.balance;
        redBackgroundSavingsF();
    }
}

function savingsWithdrawF(){
    var savingsAmount = document.getElementById('savingsAmount').value;
    var savingsAmountI = parseInt(savingsAmount);
    if (parseInt(savingsAmountI) > 0 && enoughFundsInSavingsF(savingsAmountI)) {
        accounts.savings.balance -= savingsAmountI;
        balance2.innerHTML = '$' + accounts.savings.balance;
        redBackgroundSavingsF();
    }
}

function enoughFundsInSavingsF(withdraw){
    var tempBalance = accounts.savings.balance;

    if (tempBalance - withdraw >= 0){
        return true;
    } else {
        return false;
    }
}

function enoughFundsInChequingF(withdraw){
    var tempBalance = accounts.chequing.balance;

    if (tempBalance - withdraw >= 0){
        return true;
    } else {
        return false;
    }
}

function redBackgroundSavingsF() {
    if (accounts.savings.balance == 0) {
        //document.getElementById("balance").className += " background-red";
        document.getElementById("balance2").classList.add('zero');

    } else if (accounts.savings.balance > 0) {
        //document.getElementById("balance").className -= " background-red";
        document.getElementById("balance2").classList.remove('zero');
    }
}
function redBackgroundChequingF(){
    if (accounts.chequing.balance == 0){
        //document.getElementById("balance").className += " background-red";
        document.getElementById("balance1").classList.add('zero');

    } else if (accounts.chequing.balance > 0) {
        //document.getElementById("balance").className -= " background-red";
        document.getElementById("balance1").classList.remove('zero');
    }
}


