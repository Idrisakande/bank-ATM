class Bank {
  constructor(balance) {
    // properties
    this.balance = balance;
  }

  // methods
  deposit(amount) {
    this.balance += Number(amount);
    sucessfulDiv.innerText = "Deposit transaction was sucessful";
    balanceDiv.innerText = "";
    // alert(`Your balance
    // deposited is $${this.balance}`);
    console.log("deposited", `$${amount}`);
    console.log({ balance: this.balance });
  }

  withdraw(amount) {
    // guard clause
    if (amount <= this.balance) {
      this.balance -= amount;
      sucessfulDiv.innerText = "Withdraw transaction was sucessful";
      balanceDiv.innerText = "";
      console.log("withdrew", `$${amount}`);
      console.log({ balance: this.balance });
    } else {
      sucessfulDiv.innerText = "❌ Insuficient funds, try to fund your account";
      balanceDiv.innerText = "";
      //   alert(`Insuficient funds.
      //   Your balance is $${this.balance}`);
      // console.log({ balance: this.balance });
    }
    // if (this.balance - amount <= 0) {
    //   sucessfulDiv.innerText = "Insuficient funds, try to fund your account";
    //   alert("insuficient funds");
    // } else {
    //   this.balance -= amount;

    //   sucessfulDiv.innerText = "Withdraw transaction was sucessful";
    //   console.log("withdrew", `$${amount}`);
    //   console.log({ balance: this.balance });
    // }
  }
}

const idris = new Bank(Number());

const amountInput = document.getElementById("amount");
const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const checkBalanceButton = document.getElementById("checkBalance");
const balanceDiv = document.getElementById("balance");
const sucessfulDiv = document.getElementById("sucessful");

depositButton.onclick = () => {
  const amount = Number(amountInput.value);
  idris.deposit(amount);
};

withdrawButton.onclick = () => {
  const amount = Number(amountInput.value);
  idris.withdraw(amount);
};
checkBalanceButton.onclick = () => {
  // sucessfulDiv.innerText = 'Your transaction was sucessful'
  balanceDiv.innerText = `Your account balance is $${idris.balance}`;
};
