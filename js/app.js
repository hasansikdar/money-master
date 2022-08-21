function getInputValue(element){
    let input = document.getElementById(element).value;
    let inputValue = parseFloat(input);
    return inputValue;
}
function getElementValue(element){
    let getElement = document.getElementById(element);
    return getElement;
}

document.getElementById("calculate-button").addEventListener("click", function(event){
    let income =  getInputValue("income-input");
    let food = getInputValue("food-input");
    let rent = getInputValue("rent-input")
    let cloths = getInputValue("clothes-input")
    
    
    
    let sumTotalExpenses = food + rent + cloths;
    let totalExpences = getElementValue("total-expenses").innerText = sumTotalExpenses;
    
    let balance = income - sumTotalExpenses;
    let balanceMoney =  getElementValue("balance").innerText = balance;
    
    if(isNaN(totalExpences && balanceMoney)){
       return alert("please input valid number");
    }
    else if((totalExpences > income)){
        return  alert("please input valid income");
    }
})
document.getElementById("saving-button").addEventListener("click", function(){
    let income =  getInputValue("income-input");
    let discount = getInputValue("discount-input")
    let balanceMoney =  getElementValue("balance").innerText;
    let balaceMoneyValue = parseFloat(balanceMoney);
    
    
    let savingMoneyString =( income * (discount / 100)).toFixed(2); 
    let savingMoney = parseFloat(savingMoneyString);
    let savingAmount = getElementValue("saving-amount").innerText = savingMoney;
    
    
    let RemainingBalanceString = (balaceMoneyValue - savingMoney).toFixed(2);
    let RemainingBalance = parseFloat(RemainingBalanceString);
    let remainingBalance =  getElementValue("remaining-balance").innerText = RemainingBalance;

    if(isNaN(savingAmount && remainingBalance)){
        alert("please input valid number");
    }
    else if((savingAmount > remainingBalance)){
        alert("please input saving number");
    }
   
  
  
})