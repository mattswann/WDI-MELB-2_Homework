// Setting the initial global variables
var checkingBalance = document.querySelector("#balance1");
var savingsBalance = document.querySelector("#balance2");
var checkingAmount = document.querySelector("#checkingAmount");
var checkingDeposit = document.querySelector("#checkingDeposit");
var checkingWithdraw = document.querySelector("#checkingWithdraw");
var savingsAmount = document.querySelector("#savingsAmount");
var savingsDeposit = document.querySelector("#savingsDeposit");
var savingsWithdraw = document.querySelector("#savingsWithdraw");
var excludeDollarSign = 1;

// calling the function to check if the balance is zero to make account background color as red
checkCheckingBalanceZero();
checkSavingsBalanceZero();

// buttons waiting for 'click' event
checkingDeposit.addEventListener('click',depositChecking);
savingsDeposit.addEventListener('click',depositSavings);
checkingWithdraw.addEventListener('click',withdrawChecking);
savingsWithdraw.addEventListener('click',withdrawSavings);

// function to make checking background color red if balance is $0
function checkCheckingBalanceZero(){
  var chekcingAccount = document.querySelector('#checkingAccount');
  if (+checkingBalance.innerHTML.slice(excludeDollarSign) === 0){
    checkingAccount.className = checkingAccount.className + " zero";
  } else {
    checkingAccount.className = "account";
  }
};

// function to make savings background color red if balance is $0
function checkSavingsBalanceZero(){
  var savingsAccount = document.querySelector('#savingsAccount');
  if (+savingsBalance.innerHTML.slice(excludeDollarSign) === 0){
    savingsAccount.className = savingsAccount.className + " zero";
  } else {
    savingsAccount.className = "account";
  }
};

// function to deposit money into checking acount
function depositChecking(){
  if(+checkingAmount.value >= 0){
    transaction('checking', (+checkingAmount.value));
    checkingAmount.value = '';
  }
};

// function to deposit money into savings acount
function depositSavings(){
  if(+savingsAmount.value >= 0){
    transaction('savings', (+savingsAmount.value));
    savingsAmount.value = '';
  }
};

// function to withdraw money from checking acount
function withdrawChecking(){
  withdrawal('checking', checkingAmount.value);
  checkingAmount.value= '';
};

// function to withdraw money from savings acount
function withdrawSavings(){
  withdrawal('savings', savingsAmount.value);
  savingsAmount.value = '';
};

// function for money withdrawal with overdraft protection
function withdrawal(account, number){
  var checkingBalanceNumber = +checkingBalance.innerHTML.slice(excludeDollarSign);
  var savingsBalanceNumber = +savingsBalance.innerHTML.slice(excludeDollarSign);
  if(number >= 0 && checkingBalanceNumber + savingsBalanceNumber >= number){
    if(account === 'checking'){
     if(checkingBalanceNumber >= number){
        transaction('checking', -number);
      } else {
        transaction('savings',checkingBalanceNumber + -number);
        transaction('checking', -checkingBalanceNumber);
      }
    } else{
      if(savingsBalanceNumber >= number){
        transaction('savings', (-number));
      } else {
        transaction('checking',savingsBalanceNumber + (-number));
        transaction('savings', -savingsBalanceNumber);
      }
    }
  }
};

// function where both withdrawal and deposit function call to add or minus the account balance
function transaction(account, number){
  if (account === 'checking'){
    var checkingBalanceNumber = +checkingBalance.innerHTML.slice(excludeDollarSign);
    checkingBalance.innerHTML = '$' + (checkingBalanceNumber + number).toString();
    checkCheckingBalanceZero();
  }else{
    var savingsBalanceNumber = +savingsBalance.innerHTML.slice(excludeDollarSign);
    savingsBalance.innerHTML = '$' + (savingsBalanceNumber + number).toString();
    checkSavingsBalanceZero();
  }
};