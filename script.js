let bill = 0,
    numOfPeople = 0,
    tip = 0;

function assignEvent(value) {
    let numOnly = value.replace(new RegExp("%", "g"), "");
    tip = parseFloat(numOnly);
    console.log(`tip: ${tip}, tip type: ${typeof tip}`)
}

const btn = document.querySelectorAll('button.tip-item');
for (let i = 0;i<btn.length;i++){
    btn[i].addEventListener("click", function(){
        let clickValue = btn[i].innerHTML;
        assignEvent(clickValue);
    });
}

function assignResult(total,amount) {
    document.getElementById("total").innerHTML = `$${total.toString()}`;
    document.getElementById("tip-amount").innerHTML = `$${amount.toString()}`;
}

function calculateTip() {
    totalTip = (bill*tip)/100;

    console.log(`\n Total Tip: ${totalTip} type of ${typeof totalTip}`);

    tipAmount = totalTip/numOfPeople;
    console.log(`\n People: ${numOfPeople} type of ${typeof numOfPeople}`);

    console.log(`\n Tip Amount: ${tipAmount} type of ${typeof tipAmount}`);


    assignResult(totalTip,tipAmount);
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

