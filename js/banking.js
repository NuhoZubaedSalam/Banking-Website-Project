document.getElementById("deposit-button").addEventListener("click", () => {
    const depositedAmount = parseFloat(document.getElementById("deposit-input").value);
    const currentBalance = parseFloat(document.getElementById("display-balance").innerText);
    
    if (depositedAmount <= 0) {
        document.getElementById("deposit-input").value = '';
        return alert("You need to deposit at least $1");
    } else {
        const totalDeposit = parseFloat(document.getElementById("display-total-deposit").innerText);

        document.getElementById("display-total-deposit").innerText = totalDeposit + depositedAmount;
        document.getElementById("display-balance").innerText = currentBalance + depositedAmount;
        document.getElementById("deposit-input").value = '';
    }
});

document.getElementById("withdraw-button").addEventListener("click", () => {
    const withdrawnAmount = parseFloat(document.getElementById("withdraw-input").value);
    const currentBalance = parseFloat(document.getElementById("display-balance").innerText);

    if (withdrawnAmount <= 0)  {
        document.getElementById("deposit-input").value = '';
        return alert("You need to withdraw at least $1");
    } else if (withdrawnAmount > currentBalance)
        return alert("The amount you want to withdraw exceedes your balance")
    else {
        const totalWithdraw = parseFloat(document.getElementById("display-total-withdraw").innerText);

        document.getElementById("display-total-withdraw").innerText = totalWithdraw + withdrawnAmount;
        document.getElementById("display-balance").innerText = currentBalance - withdrawnAmount;
        document.getElementById("withdraw-input").value = '';
    }
});