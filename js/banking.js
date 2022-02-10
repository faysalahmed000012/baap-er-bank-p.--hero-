document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const depositAmount = Number(depositInput.value);
  console.log(depositAmount);

  const depositTotal = document.getElementById("deposit-total");

  depositTotal.innerText = Number(depositTotal.innerText) + depositAmount;
  //   clear deposit amount
  depositInput.value = "";
  //   update balance
  const balance = document.getElementById("balance");
  const getBalance = Number(balance.innerText);
  //   set total balance
  const totalBalance = getBalance + Number(depositTotal.innerText);
  console.log(totalBalance);
  balance.innerText = totalBalance;
});

// handel withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdraw = document.getElementById("withdraw-total");
  const withdrawAmount = Number(withdrawInput.value);
  withdraw.innerText = Number(withdraw.innerText) + withdrawAmount;
  //   clear withdraw value
  withdrawInput.value = "";

  // update balance
  const Balacnce = document.getElementById("balance");
  const getBalanceValue = Number(Balacnce.innerText);
  const BalacnceTotal = getBalanceValue - Number(withdraw.innerText);
  Balacnce.innerText = BalacnceTotal;
});
