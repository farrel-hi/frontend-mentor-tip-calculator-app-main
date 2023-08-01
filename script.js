let bill = 0,
    numOfPeople = 0,
    tip = 0;

function assignEvent(value) {
    let numOnly = value.replace(new RegExp("%", "g"), "");
    tip = parseFloat(numOnly);
    console.log(`tip: ${tip}, tip type: ${typeof tip}`)
}

function changeButtanDisplay(percentage) {
    document.getElementById(`${percentage}`).style.color = "hsl(183, 100%, 15%)";
    document.getElementById(`${percentage}`).style.backgroundColor = "hsl(172, 67%, 45%)";
}

function resetButtonDisplay(buttons) {
    buttons.forEach(button => {
        button.style.backgroundColor = "hsl(183, 100%, 15%)";
        button.style.color = "hsl(189, 41%, 97%)"; 
      });
}

const btn = document.querySelectorAll('button.tip-item');
for (let i = 0;i<btn.length;i++){
    btn[i].addEventListener("click", function(){
        let clickValue = btn[i].innerHTML;
        document.getElementById("custom-tip").value = "";
        resetButtonDisplay(btn); //reset all button display to original first so it will change the previous clicked button to the original
        changeButtanDisplay(clickValue);
        assignEvent(clickValue);
    });
}

const customTipBtn = document.getElementById("custom-tip");
customTipBtn.addEventListener("click", function(){
    resetButtonDisplay(btn);
})

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function(){
    document.getElementById("total").innerHTML = `$0.0`;
    document.getElementById("tip-amount").innerHTML = `$0.0`;
    document.getElementById("bill").value = "";
    document.getElementById("num-people").value = "";
    document.getElementById("custom-tip").value = "";
    resetButtonDisplay(btn); //reset all button display to original first so it will change the previous clicked button to the original
})

function assignResult(total,amount) {
    document.getElementById("total").innerHTML = `$${total}`;
    document.getElementById("tip-amount").innerHTML = `$${amount}`;
}

function calculateTip() {
    tipAmount = (bill*(tip/100))/numOfPeople;
    console.log(`\n People: ${numOfPeople} type of ${typeof numOfPeople}`);
    
    totalTip = (bill/numOfPeople)+tipAmount;
    console.log(`\n Total Tip: ${totalTip} type of ${typeof totalTip}`);

    console.log(`\n Tip Amount: ${tipAmount} type of ${typeof tipAmount}`);

    let tipToFloat = parseFloat(tipAmount.toFixed(2));
    let totalToFloat = parseFloat(totalTip.toFixed(2));

    assignResult(totalToFloat,tipToFloat);
}

function checkCustomInput() {
    let checkBill = document.getElementById("bill").value;
    let checkCustomTip = document.getElementById("custom-tip").value;
    let checkPeople = document.getElementById("num-people").value;

    if (tip!=0 && checkCustomTip == ""){ //If only click button
        console.log(tip);
        checkCustomTip = tip;
    }
    else if(tip!=0 && checkCustomTip !=""){ //If Input Custom after click Button
        tip = parseFloat(checkCustomTip);

    }
    //Input Custom > Click Button Scenario hasn't been fix yet

    console.log(`bill:${checkBill} type: ${typeof checkBill}\nCustom Tip:${checkCustomTip} type: ${typeof checkCustomTip}\nPeople:${checkPeople} type: ${typeof checkPeople}`)


    if (checkBill != "" && checkCustomTip != "" && checkPeople != ""){
        bill = parseFloat(checkBill);
        numOfPeople = parseFloat(checkPeople);
        console.log(tip);
        console.log(bill);
        console.log(numOfPeople);
    
    
        if (bill != "" && tip != "" && numOfPeople != ""){
            calculateTip();
        }
    }

   

}

setInterval(checkCustomInput,500);

