document.getElementById("deposit-button").addEventListener("click", () => {
    const depositedAmount = parseFloat(document.getElementById("deposit-input").value);
    const currentBalance = parseFloat(document.getElementById("display-balance").innerText);
    
    if (depositedAmount <= 0) {
        document.getElementById("deposit-input").value = '';
        return alert("You need to deposit at least $1");
    } else {
        const totalDeposit = parseFloat(document.getElementById("display-total-deposit").innerText);         

        const newTotalDeposit = totalDeposit + depositedAmount;
        const newBalance = currentBalance + depositedAmount;

        console.log(newTotalDeposit); 
        console.log(newBalance);

        document.getElementById("display-total-deposit").innerText = newTotalDeposit.toFixed(2);
        document.getElementById("display-balance").innerText = newBalance.toFixed(2);

        console.log(newTotalDeposit.toFixed(2)); 
        console.log(newBalance.toFixed(2));

        document.getElementById("deposit-input").value = '';
    }
});

document.getElementById("withdraw-button").addEventListener("click", () => {
    const withdrawnAmount = parseFloat(document.getElementById("withdraw-input").value);
    const currentBalance = parseFloat(document.getElementById("display-balance").innerText);

    if (withdrawnAmount <= 0)  {
        document.getElementById("withdraw-input").value = '';
        return alert("You need to withdraw at least $1");
    } else if (withdrawnAmount > currentBalance)
        return alert("The amount you want to withdraw exceedes your balance")
    else {
        const totalWithdraw = parseFloat(document.getElementById("display-total-withdraw").innerText);

        const newTotalWithdraw = totalWithdraw + withdrawnAmount; 
        const newBalance = currentBalance - withdrawnAmount;

        console.log(newTotalWithdraw); 
        console.log(newBalance);

        document.getElementById("display-total-withdraw").innerText = newTotalWithdraw.toFixed(2);
        document.getElementById("display-balance").innerText = newBalance.toFixed(2);

        console.log(newTotalWithdraw.toFixed(2)); 
        console.log(newBalance.toFixed(2));

        document.getElementById("withdraw-input").value = '';
    }
});