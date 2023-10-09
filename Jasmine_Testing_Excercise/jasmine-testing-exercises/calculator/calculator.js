window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amountValue = (Object.values((getCurrentUIValues()))[0]);
  let yearsValue = (Object.values((getCurrentUIValues()))[1]);
  let rateValue = (Object.values((getCurrentUIValues()))[2]);
  let p = document.getElementById("loan-amount")
  let n = document.getElementById("loan-years")
  let i = document.getElementById("loan-rate")

  p.value = amountValue;
  n.value = yearsValue;
  i.value = rateValue;

  updateMonthly(calculateMonthlyPayment(amountValue,yearsValue,rateValue))
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let amountValue = (Object.values((getCurrentUIValues()))[0]);
  let yearsValue = (Object.values((getCurrentUIValues()))[1]);
  let rateValue = (Object.values((getCurrentUIValues()))[2]);

  updateMonthly(calculateMonthlyPayment(amountValue,yearsValue,rateValue))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(p,n,i) {
  let rate = ((i/100)/12);
  let months = n*12;
  let paymentRate = p * rate;
  let divisibleNumber = 1-((1+rate)**(-months));
  let cost = paymentRate / divisibleNumber;
  
  if (cost >= 0){
    return cost.toFixed(2);
  }
  else {
    return "Please make sure the inputed values are real numbers and greater than 0 "
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly){
  if(monthly.includes("Please")){
    document.getElementById("monthly-payment").innerText ="Please make sure the inputed values are real numbers and greater than 0 "
  }
  else{
  document.getElementById("monthly-payment").innerText = `$${monthly}`;
  }
}
