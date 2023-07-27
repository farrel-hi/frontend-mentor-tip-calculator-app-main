let bill = 0,
    numOfPeople = 0,
    tip = 0;


function checkCustomInput() {
    let checkBill = document.getElementById("bill").value;
    let checkCustomTip = document.getElementById("custom-tip").value;
    let checkPeople = document.getElementById("num-people").value;

    bill = parseFloat(checkBill);
    tip = parseFloat(checkCustomTip);
    numOfPeople = parseFloat(checkPeople);

    if (checkBill != "" && checkCustomTip != "" && checkPeople != ""){
        calculateTip();
    }

    console.log(`bill:${checkBill} type: ${typeof checkBill}\nCustom Tip:${checkCustomTip} type: ${typeof checkCustomTip}\nPeople:${checkPeople} type: ${typeof checkPeople}`)
}

setInterval(checkCustomInput,500);

function assignEvent(value) {
    let numOnly = value.replace(new RegExp("%", "g"), "");
    tip = parseFloat(numOnly);
    console.log(`tip: ${tip}, tip type: ${typeof tip}`)
}

const btn = document.querySelectorAll('button');
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
    totalTip = bill*tip;
    tipAmount = total/numOfPeople;

    assignResult(totalTip,tipAmount);
}

function checkAllVariable() {
    console.log(`bill: ${bill}`);
    console.log(`people: ${numOfPeople}`);
    console.log(`tip: ${tip}`);

    if (bill != 0 && numOfPeople != 0 && tip !=0){
        console.log("koko");
        calculateTip();
    }
}

// setInterval(checkAllVariable,500);