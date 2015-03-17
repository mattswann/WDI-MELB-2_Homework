var accounts = {};

function addAccount(account) {
  if (accounts[account] !== undefined) {
    console.log("Account " + account + " already exists.");
    return;
  }
  accounts[account] = {};
  accounts[account].balance = 0;
  accounts[account]["linked accounts"] = [];
  accounts[account]["account name"] = account;

  function callDeposit() {
    deposit(account, transactionAmountField.value);
  }

  function callWithdraw() {
    withdraw(account, transactionAmountField.value);
  }

  var transactionAmountField = document.getElementById(account + "Amount");
  document.getElementById(account + "Deposit").addEventListener('click', callDeposit);
  document.getElementById(account + "Withdraw").addEventListener('click', callWithdraw);
}

function linkAccounts(account1, account2) {
  if (accounts[account1] === undefined) {
    console.log("Account " + account1 + " not found.");
    return;
  } else if (accounts[account2] === undefined) {
    console.log("Account " + account2 + " not found.");
    return;
  }

  accounts[account1]["linked accounts"].push(account2);
  accounts[account2]["linked accounts"].push(account1);
}

function validateTransactionInput(account, amount) {
    if (accounts[account] === undefined) {
    console.log("Account " + account + " not found.");
    return false;
  } else if (Number.isNaN(parseInt(amount, 10))) {
    console.log("Amount " + amount + " not accepted. typeof(amount) = " + typeof(amount));
    return false;
  } else if (parseInt(amount, 10) <= 0) {
    console.log("Amount " + amount + " not accepted.");
    return false;
  } else {
    return true;
  }
}

function deposit(account, amount) {
  if (!validateTransactionInput(account, amount)) {
    console.log("Deposit input did not pass validation.");
    return;
  }
  accounts[account].balance += parseInt(amount, 10);
  depositInform(account, parseInt(amount, 10));
  updateScreenBalance();
}

function withdraw(account, amount) {
  if (!validateTransactionInput(account, amount)) {
    console.log("Withdrawal input did not pass validation.");
    return;
  }
  if (!balanceCheck(account, parseInt(amount, 10))) {
    insufficientFundsInform(parseInt(amount, 10));
    console.log("Not enough in all linked accounts.");
    return;
  }
  var remainingAmount = parseInt(amount, 10);
  if (accounts[account].balance >= remainingAmount) {
    withdrawalInform(account, remainingAmount);
    accounts[account].balance -= remainingAmount;
  } else {
    if (accounts[account].balance !== 0) {
      withdrawalInform(account, accounts[account].balance);
    }
    remainingAmount -= accounts[account].balance;
    accounts[account].balance = 0;
    for (i in accounts[account]["linked accounts"]) {
      var linkedAccount = accounts[account]["linked accounts"][i];
      if (accounts[linkedAccount].balance >= remainingAmount) {
        overdraftAppliedInform(linkedAccount, remainingAmount);
        accounts[linkedAccount].balance -= remainingAmount;
        break;
      } else {
        overdraftAppliedInform(linkedAccount, accounts[linkedAccount].balance);
        remainingAmount -= accounts[linkedAccount].balance;
        accounts[linkedAccount].balance = 0;
      }
    }
  }
  updateScreenBalance();
}

function balanceCheck(account, amount) {
  var totalBalance = accounts[account].balance;
  if (accounts[account]["linked accounts"].length > 0) {
    for (i in accounts[account]["linked accounts"]) {
      var linkedAccount = accounts[account]["linked accounts"][i];
      totalBalance += accounts[linkedAccount].balance;
    }
  }
  if (totalBalance < amount) {
    return false;
  } else {
    return true;
  }
}

function updateScreenBalance() {
  for (i in accounts) {
    document.getElementById(i).innerHTML = "$" + accounts[i].balance.toLocaleString();  
    var classToggle = document.getElementById(accounts[i]["account name"]);
    if (accounts[i].balance === 0) {
      classToggle.className = "zero";
    } else {
      classToggle.className = "balance";
    }
  }
}

function updateConsole(newLine) {
  var consoleLine1 =  document.getElementById("console1");
  var consoleLine2 =  document.getElementById("console2");
  var consoleLine3 =  document.getElementById("console3");
  var consoleLine4 =  document.getElementById("console4");

  consoleLine4.innerHTML = consoleLine3.innerHTML;
  consoleLine3.innerHTML = consoleLine2.innerHTML;
  consoleLine2.innerHTML = consoleLine1.innerHTML;
  consoleLine1.innerHTML = newLine;
}

function overdraftAppliedInform(linkedAccount, withdrawalAmount) {
  updateConsole("Overdraft applied: withdrawal of $" + withdrawalAmount.toLocaleString() + " made from " + linkedAccount + " account.");
}

function insufficientFundsInform(withdrawalAmount) {
  updateConsole("Insufficient funds available for a withdrawal of $" + withdrawalAmount.toLocaleString() + ".");
}

function withdrawalInform(account, withdrawalAmount) {
  updateConsole("Withdrawal of $" + withdrawalAmount.toLocaleString() + " made from " + account + " account.");
}

function depositInform(account, depositAmount) {
  updateConsole("Deposit of $" + depositAmount.toLocaleString() + " made into " + account + " account.");
}

function initialiseAccounts() {
  addAccount("savings");
  addAccount("checking");
  linkAccounts("savings","checking");
  updateScreenBalance();
  updateConsole("Welcome to GA Bank!");
}

initialiseAccounts();

// decimals
// make it not GA
// add transfer
// make js put the html in
// make js add x accounts based on args