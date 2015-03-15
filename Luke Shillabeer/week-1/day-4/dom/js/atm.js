/*
  https://gist.github.com/epoch/e0b646cb65b8fea8c2dd
*/

//--------------------------------------------
// Prototypes                                |
//--------------------------------------------

function Account(owner, accountType, balance) {

  function checkIfPos(number) {
    if (number >= 0) {
      return number;
    } else {
      return 0;
    }
  }

  this.owner       = owner || "default";
  this.accountType = accountType || "savings";
  this.balance     = balance || 0;
  this.allAccounts = [];

  this.deposit = function(value) {
    value = checkIfPos(parseInt(value, 10)) || 0;
    this.balance += value;
    this.refreshAllValues(this.allAccounts);
  };

  this.withdraw = function(value) {
    value = checkIfPos(parseInt(value, 10)) || 0;
    if (this.balance - value >= 0) {
      this.balance -= value;
    } else {
      for (var idx in this.allAccounts) {
        var otherAcc    = accounts[this.allAccounts[idx]];
        var combinedBal = this.balance + otherAcc.balance;
        if (combinedBal - value >= 0) {
          if (otherAcc.accountType != this.accountType) {
            otherAcc.balance -= value - this.balance;
            this.balance = 0;
            break;
          }
        }
      }
    }
    this.refreshAllValues(this.allAccounts);
  }

  this.transferTo = function(account, value) {
    value = checkIfPos(parseInt(value, 10)) || 0;
    if (this.balance >= value) {
      this.balance -= value;
      account.deposit(value);
    }
  }

  this.refreshAllValues = function(allAccounts) {
    for (var idx in allAccounts) {
      var currAcc = accounts[allAccounts[idx]];
      updateByID(currAcc.accountType + "Balance", "$" + currAcc.balance);
      if (currAcc.balance === 0) {
        addClassByID(currAcc.accountType + "Balance", "zero");
      } else {
        remClassByID(currAcc.accountType + "Balance", "zero");
      }
    }
  }

  // figured out how to use bind to define context via this link;
  // http://stackoverflow.com/a/18886225/2355035
  document.getElementById(this.accountType + "Deposit")
    .addEventListener("click", function() {
      this.deposit(getByID(this.accountType + "Amount"));
      updateByID(this.accountType + "Balance", "$" + this.balance);
    }.bind(this));

  document.getElementById(this.accountType + "Withdraw")
    .addEventListener("click", function() {
      this.withdraw(getByID(this.accountType + "Amount"));
      updateByID(this.accountType + "Balance", "$" + this.balance);
    }.bind(this));

  document.getElementById(this.accountType + "Transfer")
    .addEventListener("click", function() {
      var transferAcc = accounts[getByID(this.accountType + "Dropdown")];
      var transferVal = getByID(this.accountType + "Amount");
      this.transferTo(transferAcc, transferVal);
    }.bind(this));
}

//--------------------------------------------
// Helper Functions                          |
//--------------------------------------------

function addClassByID(id, classToAdd) {
  document.getElementById(id)
    .className += " " + classToAdd;
}

function remClassByID(id, classToRem) {
  // this has browser compatability issues
  document.getElementById(id).classList.remove(classToRem);
}

function updateByID(id, text) {
  if ('value' in document.getElementById(id)) {
    document.getElementById(id).value = text;
  } else if ('innerHTML' in document.getElementById(id)) {
    document.getElementById(id).innerHTML = text;
  }
}

function getByID(id) {
  if ('value' in document.getElementById(id)) {
    return document.getElementById(id).value;
  } else if ('innerHTML' in document.getElementById(id)) {
    return document.getElementById(id).innerHTML;
  }
}

function init() {
  for (var key in accounts) {

    // appropriately update the DOM with values from the accounts
    updateByID(key + "Balance", "$" + accounts[key].balance);
    accounts[key].refreshAllValues([key]);

    for (var j in accounts) {

      // update the objects with all accounts
      accounts[key].allAccounts.push(j);

      // create dropdown for account transfers
      var accDropdown  = document.getElementById(key + 'Dropdown');
      var newOption = document.createElement("option");
      newOption.innerText = j;
      newOption.setAttribute('value', j);
      accDropdown.appendChild(newOption);
    }
  }
}

//--------------------------------------------
// ... I dunno, "the code!"                  |
//--------------------------------------------

// setup all accounts
var accountOwner = "GA";
var accounts = {
  checking: new Account(accountOwner, "checking", 400),
  savings:  new Account(accountOwner, "savings", 0),
  test:     new Account(accountOwner, "test", 100),
  chet:     new Account(accountOwner, "chet", 10000)
};

init();
