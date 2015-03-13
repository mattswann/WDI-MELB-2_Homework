var checkingBalance = document.querySelector("#balance1");
var savingsBalance = document.querySelector("#balance2");
var checkingAmount = document.querySelector("#checkingAmount");
var checkingDeposit = document.querySelector("#checkingDeposit");
var checkingWithdraw = document.querySelector("#checkingWithdraw");
var savingsAmount = document.querySelector("#savingsAmount");
var savingsDeposit = document.querySelector("#savingsDeposit");
var savingsWithdraw = document.querySelector("#savingsWithdraw");

checkCheckingBalanceZero();
checkSavingsBalanceZero();

checkingDeposit.addEventListener('click',checkCheckingBalanceZero);
checkingWithdraw.addEventListener('click',doSomething);
savingsDeposit.addEventListener('click',deposit(checkingAccount.innerHTML,'savings'));
savingsWithdraw.addEventListener('click',doSomething);



function checkCheckingBalanceZero(){
  var chekcingAccount = document.querySelector('#checkingAccount');
  if (+checkingBalance.innerHTML.slice(1) === 0){
    checkingAccount.className = checkingAccount.className + " zero";
  } else {
    checkingAccount.className = "account";
  }
};

function checkSavingsBalanceZero(){
  var savingsAccount = document.querySelector('#savingsAccount');
  if (+savingsBalance.innerHTML.slice(1) === 0){
    savingsAccount.className = savingsAccount.className + " zero";
  } else {
    savingsAccount.className = "account";
  }
};

function deposit(number, account){
  if (account === 'checking'){
    var checkingBalanceNumber = +checkingBalance.innerHTML.slice(1);
    checkingBalance.innerHTML = '$' + (checkingBalanceNumber + number).toString();
  }else{
    var savingsBalanceNumber = +csavingsBalance.innerHTML.slice(1);
    savingsBalance.innerHTML = '$' + (savingsBalanceNumber + number).toString();
  }
};
